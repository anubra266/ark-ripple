import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
	title: 'Components/Toggle Group',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const Multiple = {
	render: () => ({ Component: MultipleExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};
