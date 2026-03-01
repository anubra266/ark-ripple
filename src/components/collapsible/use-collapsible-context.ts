import { Context } from 'ripple';
import type { UseCollapsibleReturn } from './use-collapsible.ripple';

export type UseCollapsibleContext = UseCollapsibleReturn;

export const CollapsibleApiContext = new Context<UseCollapsibleContext>();

export const useCollapsibleContext = (): UseCollapsibleContext => CollapsibleApiContext.get();
