import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Invalid as InvalidExample } from './examples/invalid.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithCheckbox as WithCheckboxExample } from './examples/with-checkbox.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';
import { PhoneInput as PhoneInputExample } from './examples/phone-input.ripple';

const meta: Meta = {
	title: 'Components/Fieldset',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Disabled = {
	render: () => ({ Component: DisabledExample }),
};

export const Invalid = {
	render: () => ({ Component: InvalidExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const WithCheckbox = {
	render: () => ({ Component: WithCheckboxExample }),
};

export const WithField = {
	render: () => ({ Component: WithFieldExample }),
};

export const PhoneInput = {
	render: () => ({ Component: PhoneInputExample }),
};
