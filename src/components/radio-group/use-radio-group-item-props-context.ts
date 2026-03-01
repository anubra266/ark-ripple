import type { ItemProps } from '@zag-js/radio-group';
import { Context } from 'ripple';

export const RadioGroupItemPropsContext = new Context<ItemProps>();

export const useRadioGroupItemPropsContext = (): ItemProps => RadioGroupItemPropsContext.get();
