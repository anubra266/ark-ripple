import type * as drawer from '@zag-js/drawer';
import type { PropTypes } from 'zag-ripple';
import { Context } from 'ripple';

export type UseDrawerStackContext = drawer.DrawerStackApi<PropTypes>;

export const DrawerStackApiContext = new Context<UseDrawerStackContext | undefined>(undefined);

export const useDrawerStackContext = (): UseDrawerStackContext | undefined =>
  DrawerStackApiContext.get();
