import { Context } from 'ripple';
import type { ItemGroupProps } from '@zag-js/listbox';

export const ListboxItemGroupPropsContext = new Context<ItemGroupProps>();

export const useListboxItemGroupPropsContext = (): ItemGroupProps =>
  ListboxItemGroupPropsContext.get();
