import { Context } from 'ripple';
import type { UseRadioGroupReturn } from './use-radio-group.ripple';

export type UseRadioGroupContext = UseRadioGroupReturn;

export const RadioGroupApiContext = new Context<UseRadioGroupContext>();

export const useRadioGroupContext = (): UseRadioGroupContext => RadioGroupApiContext.get();
