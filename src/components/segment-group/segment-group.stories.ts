import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Conditional as ConditionalExample } from './examples/conditional.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/Segment Group',
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

export const Conditional = {
  render: () => ({ Component: ConditionalExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
