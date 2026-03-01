import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { InitialOpen as InitialOpenExample } from './examples/initial-open.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Nested as NestedExample } from './examples/nested.ripple';
import { PartialCollapse as PartialCollapseExample } from './examples/partial-collapse.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/Collapsible',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Disabled = {
  render: () => ({ Component: DisabledExample }),
};

export const InitialOpen = {
  render: () => ({ Component: InitialOpenExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Nested = {
  render: () => ({ Component: NestedExample }),
};

export const PartialCollapse = {
  render: () => ({ Component: PartialCollapseExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
