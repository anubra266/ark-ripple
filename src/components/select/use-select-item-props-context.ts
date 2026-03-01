import { Context } from 'ripple';
import type { ItemProps } from '@zag-js/select';

export const SelectItemPropsContext = new Context<ItemProps>();

export const useSelectItemPropsContext = (): ItemProps => SelectItemPropsContext.get();
