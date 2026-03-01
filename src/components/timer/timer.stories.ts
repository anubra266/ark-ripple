import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Countdown as CountdownExample } from './examples/countdown.ripple';
import { Events as EventsExample } from './examples/events.ripple';
import { Interval as IntervalExample } from './examples/interval.ripple';
import { Pomodoro as PomodoroExample } from './examples/pomodoro.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
	title: 'Components/Timer',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Countdown = {
	render: () => ({ Component: CountdownExample }),
};

export const Events = {
	render: () => ({ Component: EventsExample }),
};

export const Interval = {
	render: () => ({ Component: IntervalExample }),
};

export const Pomodoro = {
	render: () => ({ Component: PomodoroExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};
