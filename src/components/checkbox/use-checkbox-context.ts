import { Context } from 'ripple';
import type { UseCheckboxReturn } from './use-checkbox.ripple';

export type UseCheckboxContext = UseCheckboxReturn;

export const CheckboxApiContext = new Context<UseCheckboxContext>();

export const useCheckboxContext = (): UseCheckboxContext => CheckboxApiContext.get();
