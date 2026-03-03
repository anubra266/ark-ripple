# Ripple Framework Patterns for this library

Ripple is a JS-first templating framework. Its syntax looks like JSX but follows different rules.
The package lives at `packages/ripple/`.

## Critical Syntax Rules

### 1. Control flow is NOT wrapped in `{}`

Control flow statements (`if`, `else`, `for`) are native JS statements — do NOT wrap them in `{}`.

```ripple
// ✅ CORRECT
if (@open) {
  <Dialog.Content />
} else {
  <span>{'closed'}</span>
}

for (const item of items; key item.id) {
  <Item value={item.id} />
}

// ❌ WRONG — never wrap control flow in {}
{if (@open) { ... }}
{for (...) { ... }}
```

### 2. No JSX fragments — sibling elements are placed directly

Ripple does NOT support JSX fragments (`<>...</>`). Unlike React, Ripple is declarative — multiple sibling root elements can appear directly in a component body without any wrapper.

```ripple
// ✅ CORRECT — sibling elements placed directly
export component MyComponent() {
  <Menu.Root>...</Menu.Root>
  <Dialog.Root>...</Dialog.Root>
}

// ❌ WRONG — fragments are not supported
export component MyComponent() {
  <>
    <Menu.Root>...</Menu.Root>
    <Dialog.Root>...</Dialog.Root>
  </>
}
```

### 3. Ternaries are fine for string values, not for elements

```ripple
// ✅ CORRECT — ternary for strings
{@open ? 'Hide' : 'Show'}
{'Dialog is '}{@dialog.open ? 'open' : 'closed'}

// ❌ WRONG — ternary for elements (use if/else instead)
{@open ? <ElementA /> : <ElementB />}
```

### 4. No render props — use `component children({ context }) {}`

Context components pass their API to children via `component children({ context }) {}`, not via render props.

```ripple
// ✅ CORRECT
<Dialog.Context>
  component children({ context }) {
    <span>{@context.open ? 'open' : 'closed'}</span>
  }
</Dialog.Context>

// ❌ WRONG — no render prop functions
<Dialog.Context>
  {(dialog) => <span>{dialog.open}</span>}
</Dialog.Context>
```

### 5. Component children type

Use `Component<Props>` from `ripple` for children that receive context, not function signatures:

```typescript
import { type Component } from 'ripple'

// ✅ CORRECT
export interface DialogContextProps {
  children: Component<{ context: UseDialogContext }>
}

// ❌ WRONG — don't use function types
export interface DialogContextProps {
  children: (context: UseDialogContext) => any
}
```

### 6. Static strings in JSX children need `{}`

```ripple
// ✅ CORRECT
<button>{'Click me'}</button>
<Dialog.Title class={styles.Title}>{'Welcome'}</Dialog.Title>

// ❌ WRONG
<button>Click me</button>
```

### 6. Reactive signals

```ripple
let open = track(false)    // declare reactive signal
@open                       // dereference (read)
@open = true                // assign
{ @open }                   // use in JSX expression
```

**Never unbox a tracked value into a `const` and then use `@` on it.** The `@` operator only works on tracked variables — once you unbox with `@`, the result is a plain snapshot and re-applying `@` does nothing. Use the tracked variable directly with `@`.

```ripple
const [children, value, localProps] = trackSplit(props, ['children', 'value']);

// ✅ CORRECT — use tracked variable directly
let mergedProps = track(() => mergeProps(@value.getRootProps(), @localProps));

// ❌ WRONG — unboxing into const loses reactivity, @imageCropper is meaningless
const imageCropper = @value;
let mergedProps = track(() => mergeProps(@imageCropper.getRootProps(), @localProps));
```

**Never unbox tracked values when passing them as props.** Props should receive the tracked signal so the child component stays reactive. Only use `@` when you actually need to read/consume the value (e.g. in `for` loops, expressions, conditions).

```ripple
const { collection, filter } = useListCollection({ ... });

// ✅ CORRECT — pass tracked value as prop, unbox when reading
<Listbox.Root {collection}>
for (const item of @collection.items; key item.value) { ... }

// ❌ WRONG — unboxing with @ when passing as prop
<Listbox.Root collection={@collection}>
```

### 7. `effect` vs `onMount`

Use `effect` when the setup depends on reactive values or needs cleanup. The return value of an `effect` is the cleanup function (like React's `useEffect`). Use `onMount` only for one-time, non-reactive initialization with no cleanup.

```ripple
// ✅ CORRECT — effect with reactive deps and cleanup
effect(() => {
  return @api.createFileUrl(@itemProps.file, (newUrl: string) => {
    @url = newUrl;
  });
});

// ❌ WRONG — onMount + onDestroy for reactive cleanup
let cleanup: (() => void) | undefined;
onMount(() => {
  cleanup = @api.createFileUrl(@itemProps.file, (newUrl: string) => {
    @url = newUrl;
  });
});
onDestroy(() => {
  cleanup?.();
});
```

### 8. Event handlers are camelCase like React

```ripple
// ✅ CORRECT (React style)
onClick, onChange, onInput

// ❌ WRONG
onclick, onchange, oninput, onsubmit
```

### 8. Lucide icons have no `Icon` suffix

When importing from `lucide-ripple`, drop the `Icon` suffix:

```ripple
// ✅ CORRECT
import { Pencil, Check, X, ChevronDown, Play } from 'lucide-ripple'

// ❌ WRONG
import { PencilIcon, CheckIcon, XIcon, ChevronDownIcon, PlayIcon } from 'lucide-ripple'
```

### 9. Passing elements/components as props

Don't use `fallback={<EyeOff />}` (instantiated JSX in prop value). Two patterns:

```ripple
// ✅ CORRECT — pass component reference as prop (preferred when no props needed)
<PasswordInput.Indicator fallback={EyeOff}>
  <Eye />
</PasswordInput.Indicator>

// ✅ CORRECT — named children component inside element body (when you need to pass props or compose)
<PasswordInput.Indicator>
  component fallback() {
    <EyeOff />
  }
  <Eye />
</PasswordInput.Indicator>

// ❌ WRONG — instantiated JSX as prop value
<PasswordInput.Indicator fallback={<EyeOff />}>
```

Same applies to any prop that accepts renderable content.

### 10. `track` must be imported in examples

Examples that use `track()` must explicitly import it. Component files under `src/components/` get it auto-injected by the compiler, but example files do not.

```ripple
// ✅ CORRECT — import track in examples
import { track } from 'ripple';

export component Controlled() {
  let open = track(false);
  // ...
}

// ❌ WRONG — track not imported, will throw "track is not defined"
export component Controlled() {
  let open = track(false);
}
```

### 11. Prefer `onInput` over `onChange` for native input elements

`onChange` maps to the DOM `change` event (fires on blur/commit). `onInput` maps to the DOM `input` event (fires on every keystroke). When communicating directly with a native `<input>`, prefer `onInput`. Keep `onChange` only for component callback props (e.g. `onValueChange`, `onPageSizeChange`) or `<select>` elements.

```ripple
// ✅ CORRECT — onInput for native input interactions
<input onInput={(e) => { @value = e.target.value }} />
<select onChange={(e) => @context.setPageSize(Number(e.target.value))} />

// ❌ WRONG — onChange on text input only fires on blur
<input onChange={(e) => { @value = e.target.value }} />
```

### 12. `class` not `className`

```ripple
// ✅ CORRECT
<div class={styles.Root}>

// ❌ WRONG
<div className={styles.Root}>
```

### 13. Shorthand props

When prop name matches variable name, use `{varName}` not `varName={varName}`:

```ripple
// ✅ CORRECT
<Ellipsis {index}>
<Combobox.Root {collection}>

// ❌ WRONG
<Ellipsis index={index}>
<Combobox.Root collection={collection}>
```

### 14. Content-based keys for dynamic lists

Ripple's keyed `for` loop reuses components for matching keys WITHOUT updating props. Use content-based keys instead of index keys for lists whose content shifts:

```ripple
// ✅ CORRECT — content-based key
for (const [index, page] of @context.pages.entries(); key page.value) { ... }

// ❌ WRONG — index keys cause stale DOM when list content shifts
for (const [index, page] of @context.pages.entries(); key index) { ... }
```

Note: `@` in `for` key expressions is parsed as a decorator — avoid it. Use `.entries()` for index access.

### 15. Template refs

```ripple
let inputEl: HTMLInputElement

<input {ref (el: HTMLInputElement) => { inputEl = el }} />
```

## Reference Implementations (ark submodule)

The `ark/` directory is a git submodule containing the main Ark UI monorepo with implementations in other frameworks. When developing a Ripple component, **always** look at the existing implementations for reference:

- **React**: `ark/packages/react/src/components/[component]/`
- **Solid**: `ark/packages/solid/src/components/[component]/`
- **Vue**: `ark/packages/vue/src/components/[component]/`
- **Svelte**: `ark/packages/svelte/src/components/[component]/`

Use these as the source of truth for:
- Which sub-components a component exposes (e.g. Root, Trigger, Content, etc.)
- Props and their types
- Context patterns and hook signatures
- Test cases and expected behavior
- Examples structure and content

The React implementation is the primary reference — translate it to Ripple syntax.

For components where other frameworks have too few test cases, write additional tests in Ripple to ensure extensive coverage. Don't limit Ripple tests to just what exists in React/Solid/Vue — add tests for edge cases and behaviors that are under-tested upstream.

## Component Architecture

### File naming
- Component files: `component-name.ripple`
- Context files: `use-component-context.ts` (TypeScript, not Ripple)
- Hook files: `use-component.ripple`
- Props split: `split-component-props.ripple`

### Component props type structure

Each component defines two interfaces and wraps the final props with `MaybeTracked`:

1. `BaseProps` extends `PolymorphicProps<tag>` — component-specific props + `children`/`asChild`
2. `Props` extends `HTMLProps<tag>` + `BaseProps` — adds standard HTML attributes
3. The component parameter uses `MaybeTracked<Props>` — allows props to be tracked or plain

All three types (`HTMLProps`, `PolymorphicProps`, `MaybeTracked`) are imported from `../../types`.

```typescript
import type { HTMLProps, MaybeTracked, PolymorphicProps } from '../../types'

// 1. BaseProps — component-specific props + PolymorphicProps (includes children)
export interface FileUploadItemPreviewImageBaseProps extends PolymorphicProps<'img'> {}

// 2. Props — combines HTML attributes with base props
export interface FileUploadItemPreviewImageProps extends HTMLProps<'img'>, FileUploadItemPreviewImageBaseProps {}

// 3. Component uses MaybeTracked<Props>
export component FileUploadItemPreviewImage(props: MaybeTracked<FileUploadItemPreviewImageProps>) {
  // ...
}

// With component-specific props:
export interface FileUploadItemPreviewBaseProps extends PolymorphicProps<'div'> {
  /** The file type to match against. Matches all file types by default. */
  type?: string | undefined
}
export interface FileUploadItemPreviewProps extends HTMLProps<'div'>, FileUploadItemPreviewBaseProps {}

export component FileUploadItemPreview(props: MaybeTracked<FileUploadItemPreviewProps>) {
  // ...
}
```

### Barrel exports and anatomy

When developing a new component, **always** update these files:
- `src/components/index.ts` — uncomment/add the component's public export
- `src/components/anatomy.ts` — uncomment/add the component's anatomy export
- `overrides/website/src/lib/sidebar-config.ts` — uncomment the component's sidebar entry so it appears on the website

### Export parity with React

The Ripple component must export the same public API as the React version:
- All sub-components (e.g. `Dialog.Root`, `Dialog.Trigger`, `Dialog.Content`, etc.)
- All types (props types, context types, etc.) with matching names and JSDoc comments
- Check `ark/packages/react/src/components/[component]/` for the full list of exports and types

### Context pattern

```typescript
// use-dialog-context.ts
import { Context } from 'ripple'
import type { UseDialogReturn } from './use-dialog.ripple'

export type UseDialogContext = UseDialogReturn
export const DialogApiContext = new Context<UseDialogContext>()
export const useDialogContext = (): UseDialogContext => DialogApiContext.get()

// Optional context (e.g. field, stack)
export const FieldApiContext = new Context<UseFieldContext | undefined>(undefined)
```

**Important:** When calling `Context.set()`, pass the **tracked** (boxed) value — not the unboxed `@` version. This ensures consumers always read the latest reactive value. When the context stores a tracked value, type it as `Tracked<T>`:

```typescript
// use-file-upload-item-group-props-context.ts
import { Context, type Tracked } from 'ripple'

export type UseFileUploadItemGroupContext = Tracked<ItemGroupProps>
export const FileUploadItemGroupPropsContext = new Context<UseFileUploadItemGroupContext>(...)
```

```ripple
const itemGroupProps = track(() => ({ type: @type }));

// ✅ CORRECT — pass tracked value so consumers stay reactive
FileUploadItemGroupPropsContext.set(itemGroupProps);

// ❌ WRONG — unboxing with @ passes a snapshot, consumers won't update
FileUploadItemGroupPropsContext.set(@itemGroupProps);
```

### Root component pattern

```ripple
// Sets context, may or may not render an HTML wrapper
export component DialogRoot(props) {
  const [children, rest] = trackSplit(props, ['children'])
  const [presenceProps, localProps] = splitPresenceProps(@rest)
  const [dialogProps] = splitDialogProps(@localProps)

  const dialog = useDialog(dialogProps)
  const present = track(() => @dialog.open)
  const presence = usePresence({ present, ...@presenceProps })

  DialogApiContext.set(dialog)
  PresenceApiContext.set(presence)

  <@children />   // No HTML wrapper if component has no getRootProps()
}
```

### Use `ark` factory elements, not bare HTML elements

Components must use `ark.*` factory elements (e.g. `ark.div`, `ark.span`, `ark.label`) instead of bare HTML elements (`<div>`, `<span>`, `<label>`). The factory handles ref forwarding, `asChild`, and prop merging.

```ripple
// ✅ CORRECT — use ark factory elements
import { ark } from '../factory'

<ark.div {...@mergedProps} {ref (el: HTMLDivElement) => { @presence.setNode(el) }}>
  <@children />
</ark.div>

// ❌ WRONG — bare HTML elements lose ref forwarding and asChild support
<div {...@mergedProps} {ref (el: HTMLDivElement) => { @presence.setNode(el) }}>
  <@children />
</div>
```

### Presence integration

Components with popover/modal behavior (dialog, drawer, select, combobox) integrate presence for mount/unmount animations:

- **Root**: creates `usePresence({ present: @api.open })`, sets `PresenceApiContext`
- **Positioner**: reads `usePresenceContext()`, renders nothing if `@presence.unmounted`
- **Content**: reads both contexts, merges `@presence.getPresenceProps()`, sets `@presence.setNode(el)` ref
- **Backdrop**: creates its OWN local presence (independent of content presence)

```ripple
// Content — merges presence props and sets ref
let mergedProps = track(() => mergeProps(@dialog.getContentProps(), @presence.getPresenceProps(), @localProps))

if (!@presence.unmounted) {
  <ark.div {...@mergedProps} {ref (el: HTMLDivElement) => { @presence.setNode(el) }}>
    <@children />
  </ark.div>
}
```

### Presence imports

```ripple
import { splitPresenceProps } from '../presence/split-presence-props.ripple'  // .ripple extension required
import { usePresence } from '../presence/use-presence.ripple'                  // .ripple extension required
import { PresenceApiContext, usePresenceContext } from '../presence/use-presence-context'  // no extension (.ts)
```

### Hook pattern

Hooks that return a `track()` value must declare `Tracked<T>` in their return type — reflect what the function actually returns.

```ripple
import * as dialog from '@zag-js/dialog'
import { useMachine, normalizeProps, type PropTypes } from 'zag-ripple'
import { track, type Tracked } from 'ripple'
import { useEnvironmentContext } from '../../providers/environment'
import { useLocaleContext } from '../../providers/locale'
import { useId } from '../../utils/use-id'

export interface UseDialogReturn extends Accessor<dialog.Api<PropTypes>> {}

// ✅ CORRECT — returns track(), so return type is Tracked<T>
export function useDialog(props?: UseDialogProps): Tracked<UseDialogReturn> {
  const locale = useLocaleContext()
  const env = useEnvironmentContext()
  const id = useId()

  const machineProps = track(() => ({
    id,
    dir: @locale.dir,
    getRootNode: @env.getRootNode,
    ...@props,
  }))

  const service = useMachine(dialog.machine, machineProps)
  return track(() => dialog.connect(service, normalizeProps))
}
```

### Split props pattern

only using it when there's quite a few props to split, if e.g. it's just id, prefer `trackSplit` right in the component that needs it.

```ripple
import { createSplitProps } from '../../utils/create-split-props.ripple'
import type { UseDialogProps } from './use-dialog.ripple'

const splitProps = createSplitProps<UseDialogProps>()

export function splitDialogProps<T extends UseDialogProps & Record<string, any>>(props: T) {
  return splitProps(props, ['id', 'open', 'defaultOpen', 'onOpenChange', ...])
}
```

## Tests

### Running tests

```bash
# Always use this command (vitest),
cd packages/ripple && pnpm run test:ci
```

### Short name namespace imports

**Always** import the namespace object and use dot notation to access parts. This applies to both examples and tests. Never import individual long-named components.

```ripple
// ✅ CORRECT — import namespace, use dot notation
import { Editable } from 'ark-ripple/editable'
import { Field } from 'ark-ripple/field'

<Editable.Root ...>
  <Editable.Label ...>
  <Editable.Area ...>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>
</Editable.Root>

// ❌ WRONG — never import individual long-named components
import { EditableRoot, EditableLabel, EditableArea } from 'ark-ripple/editable'
```

### Test imports

Always import components from their package path — never use relative imports or `import * as`:

```typescript
// ✅ CORRECT — package path, destructured
import { Dialog } from 'ark-ripple/dialog'
import { Select } from 'ark-ripple/select'
import { render, screen, fireEvent, waitFor } from '../../../test-utils'

// ❌ WRONG — relative path
import { Dialog } from '../dialog'

// ❌ WRONG — import * as
import * as Dialog from 'ark-ripple/dialog'
```

### fireEvent vs user.click

When clicking elements that may have `pointer-events: none` (e.g. trigger buttons when `lazyMount: true` or `open: false`), use `fireEvent.click` instead of `user.click`:

```typescript
// ✅ Use fireEvent.click when the element might have pointer-events: none
fireEvent.click(screen.getByRole('button', { name: 'Open Dialog' }))

// ✅ Use user.click for normal interactive elements
await user.click(screen.getByRole('button', { name: 'Close' }))
```

This applies to lazy-mount tests, controlled-closed tests, and any test where the content is not yet in the DOM when clicking the trigger.

## Example / Story Parity with React

**Ripple examples and stories must have structural parity with their React counterparts.** Every example that exists in React must also exist in Ripple. Use the React example as the source of truth for:
- Component structure and nesting
- Prop names and values (translated to Ripple syntax)
- CSS class names (`styles.X`)
- Inline styles
- Content data (titles, body text, array data — copy exactly, do not make up lorem ipsum)
- Which child components to use (e.g. `Dialog.CloseTrigger` in Actions footer)
- Refs and focus management (`initialFocusEl`, `ref`)

The only differences allowed are Ripple syntax translations:
- `className` → `class`
- `useState` → `track()`
- `useRef` → `let myRef = track<T | null>(null)` (refs use `track()` too)
- `ref={refVar}` → `{ref (el: T) => { refVar = el }}`
- Array `.map()` → `for (const item of arr; key item.id) { ... }`
- String children wrapped in `{}`
- `XIcon` (lucide-react) → `{'✕'}` or lucide-ripple equivalent

When implementing a Ripple example, always read the React example first and translate it directly. Never invent content, structure, or props that differ from the React version.

### Adding examples to stories

Every example file **must** be imported and exported in the component's `.stories.ts` file. When you create a new example, add it to the story file following the existing pattern:

```typescript
// component-name.stories.ts
import { CustomCalendar as CustomCalendarExample } from './examples/custom-calendar.ripple';

export const CustomCalendar = {
  render: () => ({ Component: CustomCalendarExample }),
};
```

Never create an example without also adding its corresponding story export.

### Example-only dependencies

If an example requires a third-party package that isn't already in `package.json` (e.g. `image-conversion` for file-upload's `transform-files` example), install it as a **devDependency** since examples are not shipped in dist:

```bash
pnpm i -d image-conversion
```

React examples location: `ark/packages/react/src/components/[component]/examples/`
Ripple examples location: `packages/ripple/src/components/[component]/examples/`

### Render-testing every example

After building a component, **always** create a temporary test file that renders and interacts with each example before considering the component done. There are almost always bugs that only surface when actually rendering (missing `track` imports, wrong event handlers, etc.).

```typescript
// tests/examples.test.ts — render every example, click buttons, type in inputs
import { Basic } from '../examples/basic.ripple'
// ... import all examples

describe('ComponentName Examples', () => {
  it('Basic - should render and interact', async () => {
    render(Basic)
    // verify key elements render and basic interactions work
  })
  // ... test each example
})
```

### Checking example parity

After developing or updating a component's examples, **always** run:

```bash
pnpm run check:examples
```

This script verifies that every React example has a corresponding Ripple example. Fix any missing examples it reports before considering the component done.

## Changesets

After developing a new component, **always** add a changeset to document the addition:

```bash
# Create a changeset file in .changeset/ with a random name
```

Changeset format (use `patch` for new components):

```markdown
---
'ark-ripple': patch
---

Add [ComponentName] component
```