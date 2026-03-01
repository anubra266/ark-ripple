import { Context } from 'ripple';
import type { ItemProps } from '@zag-js/combobox';

export const ComboboxItemPropsContext = new Context<ItemProps>();

export const useComboboxItemPropsContext = (): ItemProps => ComboboxItemPropsContext.get();
