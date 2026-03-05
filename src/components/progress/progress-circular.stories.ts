import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/circular/basic.ripple';
import { Controlled as ControlledExample } from './examples/circular/controlled.ripple';
import { Indeterminate as IndeterminateExample } from './examples/circular/indeterminate.ripple';
import { InitialValue as InitialValueExample } from './examples/circular/initial-value.ripple';
import { MinMax as MinMaxExample } from './examples/circular/min-max.ripple';
import { RootProvider as RootProviderExample } from './examples/circular/root-provider.ripple';
import { WithLabel as WithLabelExample } from './examples/circular/with-label.ripple';

const meta: Meta = {
  title: 'Components / Progress - Circular',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Indeterminate = {
  render: () => ({ Component: IndeterminateExample }),
};

export const InitialValue = {
  render: () => ({ Component: InitialValueExample }),
};

export const MinMax = {
  render: () => ({ Component: MinMaxExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithLabel = {
  render: () => ({ Component: WithLabelExample }),
};
