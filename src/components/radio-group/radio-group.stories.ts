import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { InitialValue as InitialValueExample } from './examples/initial-value.ripple';
import { Orientation as OrientationExample } from './examples/orientation.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithFieldset as WithFieldsetExample } from './examples/with-fieldset.ripple';

const meta: Meta = {
	title: 'Components/Radio Group',
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

export const InitialValue = {
	render: () => ({ Component: InitialValueExample }),
};

export const Orientation = {
	render: () => ({ Component: OrientationExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const WithFieldset = {
	render: () => ({ Component: WithFieldsetExample }),
};
