import { Context } from 'ripple';
import type { ItemGroupProps } from '@zag-js/combobox';

export const ComboboxItemGroupPropsContext = new Context<ItemGroupProps>();

export const useComboboxItemGroupPropsContext = (): ItemGroupProps =>
  ComboboxItemGroupPropsContext.get();
