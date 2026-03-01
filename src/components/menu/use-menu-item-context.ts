import { Context } from 'ripple';
import type { OptionItemState } from '@zag-js/menu';
import type { Optional } from '../../types';

export type UseMenuItemContext = Optional<OptionItemState, 'checked'>;

export const MenuItemContext = new Context<UseMenuItemContext>();

export const useMenuItemContext = (): UseMenuItemContext => MenuItemContext.get();
