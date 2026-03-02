import { Context } from 'ripple';
import type { ItemProps } from '@zag-js/listbox';

export const ListboxItemPropsContext = new Context<ItemProps>();

export const useListboxItemPropsContext = (): ItemProps => ListboxItemPropsContext.get();
