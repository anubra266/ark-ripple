import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Autofocus as AutofocusExample } from './examples/autofocus.ripple';
import { InitialFocus as InitialFocusExample } from './examples/initial-focus.ripple';

const meta: Meta = {
	title: 'Components/Focus Trap',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Autofocus = {
	render: () => ({ Component: AutofocusExample }),
};

export const InitialFocus = {
	render: () => ({ Component: InitialFocusExample }),
};
