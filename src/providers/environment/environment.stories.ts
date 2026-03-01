import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { ShadowRoot as ShadowRootExample } from './examples/shadow-root.ripple';
import { Setup as SetupExample } from './examples/setup.ripple';

const meta: Meta = {
	title: 'Utilities / Environment',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Setup = {
	render: () => ({ Component: SetupExample }),
};

export const ShadowRoot = {
	render: () => ({ Component: ShadowRootExample }),
};
