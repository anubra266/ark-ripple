import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { InitialChecked as InitialCheckedExample } from './examples/initial-checked.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components / Switch',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Disabled = {
  render: () => ({ Component: DisabledExample }),
};

export const InitialChecked = {
  render: () => ({ Component: InitialCheckedExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
