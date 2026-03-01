import { Context } from 'ripple';
import type { ItemState } from '@zag-js/combobox';

export type UseComboboxItemContext = ItemState;

export const ComboboxItemApiContext = new Context<UseComboboxItemContext>();

export const useComboboxItemContext = (): UseComboboxItemContext => ComboboxItemApiContext.get();
