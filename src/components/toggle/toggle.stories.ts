import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Indicator as IndicatorExample } from './examples/indicator.ripple';

const meta: Meta = {
	title: 'Components/Toggle',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Context = {
	render: () => ({ Component: ContextExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const Disabled = {
	render: () => ({ Component: DisabledExample }),
};

export const Indicator = {
	render: () => ({ Component: IndicatorExample }),
};
