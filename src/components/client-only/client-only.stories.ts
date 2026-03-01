import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { WithFallback as WithFallbackExample } from './examples/with-fallback.ripple';

const meta: Meta = {
	title: 'Utilities / ClientOnly',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const WithFallback = {
	render: () => ({ Component: WithFallbackExample }),
};
