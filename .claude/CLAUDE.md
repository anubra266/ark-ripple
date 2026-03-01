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

### 5. Static strings in JSX children need `{}`

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

### 7. Event handlers are camelCase like React

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

### 9. `class` not `className`

```ripple
// ✅ CORRECT
<div class={styles.Root}>

// ❌ WRONG
<div className={styles.Root}>
```

### 9. Template refs

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

### Barrel exports and anatomy

When developing a new component, **always** update these files:
- `src/components/index.ts` — add the component's public export
- `src/components/anatomy.ts` — add the component's anatomy export

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

```ripple
import * as dialog from '@zag-js/dialog'
import { useMachine, normalizeProps, type PropTypes } from 'zag-ripple'
import { track } from 'ripple'
import { useEnvironmentContext } from '../../providers/environment'
import { useLocaleContext } from '../../providers/locale'
import { useId } from '../../utils/use-id'

export function useDialog(props: UseDialogProps = {}) {
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
# Always use this command (vitest), NOT `bun test`
cd packages/ripple && bun run test:ci
```

### Short name namespace imports

**Always** import the namespace object and use dot notation to access parts. This applies to both examples and tests. Never import individual long-named components.

```ripple
// ✅ CORRECT — import namespace, use dot notation
import { Editable } from '@ark-ui/ripple/editable'
import { Field } from '@ark-ui/ripple/field'

<Editable.Root ...>
  <Editable.Label ...>
  <Editable.Area ...>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>
</Editable.Root>

// ❌ WRONG — never import individual long-named components
import { EditableRoot, EditableLabel, EditableArea } from '@ark-ui/ripple/editable'
```

### Test imports

Always import components from their package path — never use relative imports or `import * as`:

```typescript
// ✅ CORRECT — package path, destructured
import { Dialog } from '@ark-ui/ripple/dialog'
import { Select } from '@ark-ui/ripple/select'
import { render, screen, fireEvent, waitFor } from '../../../test-utils'

// ❌ WRONG — relative path
import { Dialog } from '../dialog'

// ❌ WRONG — import * as
import * as Dialog from '@ark-ui/ripple/dialog'
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

React examples location: `ark/packages/react/src/components/[component]/examples/`
Ripple examples location: `packages/ripple/src/components/[component]/examples/`

### Checking example parity

After developing or updating a component's examples, **always** run:

```bash
bun run check:examples
```

This script verifies that every React example has a corresponding Ripple example. Fix any missing examples it reports before considering the component done.

## Storybook

New story files require a full server restart to be indexed (HMR does not pick up new files):

```bash
bun run ripple dev
```
