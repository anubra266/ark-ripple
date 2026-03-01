import { Context } from 'ripple';
import type { UseDrawerReturn } from './use-drawer.ripple';

export type UseDrawerContext = UseDrawerReturn;

export const DrawerApiContext = new Context<UseDrawerContext>();

export const useDrawerContext = (): UseDrawerContext => DrawerApiContext.get();
