import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/linear/basic.ripple';
import { Controlled as ControlledExample } from './examples/linear/controlled.ripple';
import { Indeterminate as IndeterminateExample } from './examples/linear/indeterminate.ripple';
import { InitialValue as InitialValueExample } from './examples/linear/initial-value.ripple';
import { MinMax as MinMaxExample } from './examples/linear/min-max.ripple';
import { RootProvider as RootProviderExample } from './examples/linear/root-provider.ripple';
import { ValueText as ValueTextExample } from './examples/linear/value-text.ripple';
import { Vertical as VerticalExample } from './examples/linear/vertical.ripple';

const meta: Meta = {
  title: 'Components / Progress - Linear',
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

export const ValueText = {
  render: () => ({ Component: ValueTextExample }),
};

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
};
