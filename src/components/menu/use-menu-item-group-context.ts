import { Context } from 'ripple';

export interface ValueChangeDetails {
	value: string;
}

export interface UseMenuItemGroupContext {
	id: string;
	value?: string | undefined;
	onValueChange?: ((e: ValueChangeDetails) => void) | undefined;
}

export const MenuItemGroupContext = new Context<UseMenuItemGroupContext>();

export const useMenuItemGroupContext = (): UseMenuItemGroupContext => MenuItemGroupContext.get();
