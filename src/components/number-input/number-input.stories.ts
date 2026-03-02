import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Formatting as FormattingExample } from './examples/formatting.ripple';
import { FractionDigits as FractionDigitsExample } from './examples/fraction-digits.ripple';
import { MinMax as MinMaxExample } from './examples/min-max.ripple';
import { MouseWheel as MouseWheelExample } from './examples/mouse-wheel.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Scrubber as ScrubberExample } from './examples/scrubber.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/NumberInput',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Formatting = {
  render: () => ({ Component: FormattingExample }),
};

export const FractionDigits = {
  render: () => ({ Component: FractionDigitsExample }),
};

export const MinMax = {
  render: () => ({ Component: MinMaxExample }),
};

export const MouseWheel = {
  render: () => ({ Component: MouseWheelExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Scrubber = {
  render: () => ({ Component: ScrubberExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
