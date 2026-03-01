import type * as drawer from '@zag-js/drawer';
import { Context } from 'ripple';

export const DrawerStackStoreContext = new Context<drawer.DrawerStack | undefined>(undefined);

export const useDrawerStackStoreContext = (): drawer.DrawerStack | undefined =>
	DrawerStackStoreContext.get();
