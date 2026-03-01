import { Context } from 'ripple';
import type { UseCheckboxGroupReturn } from './use-checkbox-group.ripple';

export type UseCheckboxGroupContext = UseCheckboxGroupReturn;

export const CheckboxGroupApiContext = new Context<UseCheckboxGroupContext | undefined>(undefined);

export const useCheckboxGroupContext = (): UseCheckboxGroupContext | undefined =>
  CheckboxGroupApiContext.get();
