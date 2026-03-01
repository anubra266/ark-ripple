import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Events as EventsExample } from './examples/events.ripple';
import { Provider as ProviderExample } from './examples/provider.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
	title: 'Components/Avatar',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Context = {
	render: () => ({ Component: ContextExample }),
};

export const Events = {
	render: () => ({ Component: EventsExample }),
};

export const Provider = {
	render: () => ({ Component: ProviderExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};
