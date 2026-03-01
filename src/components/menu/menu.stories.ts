import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { CheckboxItems as CheckboxItemsExample } from './examples/checkbox-items.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { ContextLazyMount as ContextLazyMountExample } from './examples/context-lazy-mount.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Group as GroupExample } from './examples/group.ripple';
import { ItemContext as ItemContextExample } from './examples/item-context.ripple';
import { Links as LinksExample } from './examples/links.ripple';
import { MenuInDialog as MenuInDialogExample } from './examples/menu-in-dialog.ripple';
import { MenuItemDialog as MenuItemDialogExample } from './examples/menu-item-dialog.ripple';
import { MultipleMenu as MultipleMenuExample } from './examples/multiple-menu.ripple';
import { Nested as NestedExample } from './examples/nested.ripple';
import { RadioItems as RadioItemsExample } from './examples/radio-items.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SelectEvent as SelectEventExample } from './examples/select-event.ripple';

const meta: Meta = {
	title: 'Components/Menu',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const CheckboxItems = {
	render: () => ({ Component: CheckboxItemsExample }),
};

export const Context = {
	render: () => ({ Component: ContextExample }),
};

export const ContextLazyMount = {
	render: () => ({ Component: ContextLazyMountExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const Group = {
	render: () => ({ Component: GroupExample }),
};

export const ItemContext = {
	render: () => ({ Component: ItemContextExample }),
};

export const Links = {
	render: () => ({ Component: LinksExample }),
};

export const MenuInDialog = {
	render: () => ({ Component: MenuInDialogExample }),
};

export const MenuItemDialog = {
	render: () => ({ Component: MenuItemDialogExample }),
};

export const MultipleMenu = {
	render: () => ({ Component: MultipleMenuExample }),
};

export const Nested = {
	render: () => ({ Component: NestedExample }),
};

export const RadioItems = {
	render: () => ({ Component: RadioItemsExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const SelectEvent = {
	render: () => ({ Component: SelectEventExample }),
};
