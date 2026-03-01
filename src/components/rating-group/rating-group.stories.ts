import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { FormUsage as FormUsageExample } from './examples/form-usage.ripple';
import { HalfStar as HalfStarExample } from './examples/half-star.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/Rating Group',
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

export const FormUsage = {
  render: () => ({ Component: FormUsageExample }),
};

export const HalfStar = {
  render: () => ({ Component: HalfStarExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
