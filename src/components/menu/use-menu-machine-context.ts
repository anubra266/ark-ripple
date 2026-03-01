import { Context } from 'ripple';
import type * as menu from '@zag-js/menu';

export type UseMenuMachineContext = menu.Service | undefined;

export const MenuMachineContext = new Context<UseMenuMachineContext>();

export const useMenuMachineContext = (): UseMenuMachineContext => MenuMachineContext.get();
