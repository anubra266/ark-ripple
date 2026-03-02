import { Context } from 'ripple';
import type { ItemState } from '@zag-js/listbox';

export type UseListboxItemContext = ItemState;

export const ListboxItemApiContext = new Context<UseListboxItemContext>();

export const useListboxItemContext = (): UseListboxItemContext => ListboxItemApiContext.get();
