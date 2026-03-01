import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { FormUsage as FormUsageExample } from './examples/form-usage.ripple';
import { Inline as InlineExample } from './examples/inline.ripple';
import { InputOnly as InputOnlyExample } from './examples/input-only.ripple';
import { OpenControlled as OpenControlledExample } from './examples/open-controlled.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SliderOnly as SliderOnlyExample } from './examples/slider-only.ripple';
import { SwatchOnly as SwatchOnlyExample } from './examples/swatch-only.ripple';
import { Swatches as SwatchesExample } from './examples/swatches.ripple';
import { ValueSwatch as ValueSwatchExample } from './examples/value-swatch.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components / Color Picker',
};

export default meta;

export const Basic = { render: () => ({ Component: BasicExample }) };
export const Controlled = { render: () => ({ Component: ControlledExample }) };
export const Disabled = { render: () => ({ Component: DisabledExample }) };
export const FormUsage = { render: () => ({ Component: FormUsageExample }) };
export const Inline = { render: () => ({ Component: InlineExample }) };
export const InputOnly = { render: () => ({ Component: InputOnlyExample }) };
export const OpenControlled = { render: () => ({ Component: OpenControlledExample }) };
export const RootProvider = { render: () => ({ Component: RootProviderExample }) };
export const SliderOnly = { render: () => ({ Component: SliderOnlyExample }) };
export const SwatchOnly = { render: () => ({ Component: SwatchOnlyExample }) };
export const Swatches = { render: () => ({ Component: SwatchesExample }) };
export const ValueSwatch = { render: () => ({ Component: ValueSwatchExample }) };
export const WithField = { render: () => ({ Component: WithFieldExample }) };
