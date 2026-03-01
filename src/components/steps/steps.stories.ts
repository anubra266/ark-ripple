import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Vertical as VerticalExample } from './examples/vertical.ripple';

const meta: Meta = {
	title: 'Components/Steps',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const Vertical = {
	render: () => ({ Component: VerticalExample }),
};
