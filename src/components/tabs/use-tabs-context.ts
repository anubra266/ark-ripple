import { Context } from 'ripple';
import type { UseTabsReturn } from './use-tabs.ripple';

export type UseTabsContext = UseTabsReturn;

export const TabsApiContext = new Context<UseTabsContext>();

export const useTabsContext = (): UseTabsContext => TabsApiContext.get();
