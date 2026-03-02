import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { AnchorPosition as AnchorPositionExample } from './examples/anchor-position.ripple';
import { ControlledOpen as ControlledOpenExample } from './examples/controlled-open.ripple';
import { ControlledPosition as ControlledPositionExample } from './examples/controlled-position.ripple';
import { ControlledSize as ControlledSizeExample } from './examples/controlled-size.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Context as ContextExample } from './examples/context.ripple';

const meta: Meta = {
  title: 'Components/FloatingPanel',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const AnchorPosition = {
  render: () => ({ Component: AnchorPositionExample }),
};

export const ControlledOpen = {
  render: () => ({ Component: ControlledOpenExample }),
};

export const ControlledPosition = {
  render: () => ({ Component: ControlledPositionExample }),
};

export const ControlledSize = {
  render: () => ({ Component: ControlledSizeExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};
