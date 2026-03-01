<p align="center">
  <a href="https://ark-ui.rip">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://ark-ui.com/logos/logotype-white.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://ark-ui.com/logos/logotype-black.svg">
      <img alt="Ark Ripple" src="./assets/logo.png" width="280">
    </picture>
  </a>
</p>

<p align="center">
  A collection of unstyled, accessible UI components for <a href="https://github.com/Ripple-TS/ripple">Ripple</a>, powered by <a href="https://zagjs.com">Zag.js</a> state machines.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ark-ripple">
    <img alt="npm version" src="https://img.shields.io/npm/v/ark-ripple?style=for-the-badge&color=f43f5e&label=npm">
  </a>
  <a href="https://bundlephobia.com/package/ark-ripple">
    <img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/ark-ripple?style=for-the-badge&color=6366f1&label=bundle">
  </a>
  <a href="https://github.com/chakra-ui/ark/blob/main/LICENSE">
    <img alt="license" src="https://img.shields.io/npm/l/ark-ripple?style=for-the-badge&color=0ea5e9">
  </a>
  <a href="https://github.com/chakra-ui/ark">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/chakra-ui/ark?style=for-the-badge&color=f59e0b">
  </a>
</p>

---

## Features

- **Headless** — Zero styling opinions. Bring your own CSS, Tailwind, modules, or
  design system.
- **Accessible** — WAI-ARIA compliant with full keyboard navigation out of the
  box.
- **State machines** — Powered by [Zag.js](https://zagjs.com) for predictable,
  framework-agnostic component logic.
- **Composable** — Fine-grained parts API — use only what you need, nest however
  you like.
- **SSR-ready** — Works with server-side rendering environments.

## Installation

```bash
npm install ark-ripple
```

## Quick Start

```ripple
import { Accordion } from 'ark-ripple/accordion';

export component Demo() {
  <Accordion.Root collapsible>
    <Accordion.Item value="intro">
      <Accordion.ItemTrigger>{'What is Ark UI?'}</Accordion.ItemTrigger>
      <Accordion.ItemContent>
        {'A headless component library powered by state machines.'}
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
}
```

## Anatomy

Every component follows a consistent parts-based API:

```ripple
import { Dialog } from 'ark-ripple/dialog';

export component MyDialog() {
  <Dialog.Root>
    <Dialog.Trigger>{'Open'}</Dialog.Trigger>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Title>{'Hello'}</Dialog.Title>
        <Dialog.Description>{'Welcome to Ark UI for Ripple.'}</Dialog.Description>
        <Dialog.CloseTrigger>{'Close'}</Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Dialog.Root>
}
```

## Context API

Access component state from any descendant using the Context part:

```ripple
import { Dialog } from 'ark-ripple/dialog';

export component DialogStatus() {
  <Dialog.Root>
    <Dialog.Trigger>{'Toggle'}</Dialog.Trigger>
    <Dialog.Context>
      component children({ context }) {
        <span>
          {'Dialog is '}
          {@context.open ? 'open' : 'closed'}
        </span>
      }
    </Dialog.Context>
  </Dialog.Root>
}
```

## Documentation

Visit [ark-ui.com](https://ark-ui.com) for full documentation, examples, and API
reference.

## Development

```bash
# Install dependencies
bun install

# Start Storybook
bun run dev

# Run tests
bun run test:ci

# Build
bun run build

# Lint
bun run lint:fix
```

## License

[MIT](LICENSE) &copy; [Abraham A](https://github.com/anubra266)
