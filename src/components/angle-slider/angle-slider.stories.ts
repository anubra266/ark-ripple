import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Step as StepExample } from './examples/step.ripple';

const meta: Meta = {
	title: 'Components/Angle Slider',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const Context = {
	render: () => ({ Component: ContextExample }),
};

export const Disabled = {
	render: () => ({ Component: DisabledExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const Step = {
	render: () => ({ Component: StepExample }),
};
