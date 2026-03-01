import type { ItemState } from '@zag-js/radio-group';
import { Context } from 'ripple';

export type UseRadioGroupItemContext = ItemState;

export const RadioGroupItemApiContext = new Context<UseRadioGroupItemContext>();

export const useRadioGroupItemContext = (): UseRadioGroupItemContext =>
  RadioGroupItemApiContext.get();
