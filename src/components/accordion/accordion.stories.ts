import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Collapsible as CollapsibleExample } from './examples/collapsible.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Horizontal as HorizontalExample } from './examples/horizontal.ripple';
import { ItemContext as ItemContextExample } from './examples/item-context.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Multiple as MultipleExample } from './examples/multiple.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithSlider as WithSliderExample } from './examples/with-slider.ripple';

const meta: Meta = {
	title: 'Components/Accordion',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Collapsible = {
	render: () => ({ Component: CollapsibleExample }),
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

export const Horizontal = {
	render: () => ({ Component: HorizontalExample }),
};

export const ItemContext = {
	render: () => ({ Component: ItemContextExample }),
};

export const LazyMount = {
	render: () => ({ Component: LazyMountExample }),
};

export const Multiple = {
	render: () => ({ Component: MultipleExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const WithSlider = {
	render: () => ({ Component: WithSliderExample }),
};
