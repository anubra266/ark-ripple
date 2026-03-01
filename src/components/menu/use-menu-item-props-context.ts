import { Context } from 'ripple';
import type { ItemBaseProps } from '@zag-js/menu';

export const MenuItemPropsContext = new Context<ItemBaseProps>();

export const useMenuItemPropsContext = (): ItemBaseProps => MenuItemPropsContext.get();
