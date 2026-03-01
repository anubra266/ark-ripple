import { Context } from 'ripple';
import type { UseComboboxReturn } from './use-combobox.ripple';

export type UseComboboxContext = UseComboboxReturn<any>;

export const ComboboxApiContext = new Context<UseComboboxContext>();

export const useComboboxContext = (): UseComboboxContext => ComboboxApiContext.get();
