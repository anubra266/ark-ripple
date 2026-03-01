import { Context } from 'ripple';
import type { ItemGroupProps } from '@zag-js/select';

export const SelectItemGroupPropsContext = new Context<ItemGroupProps>();

export const useSelectItemGroupPropsContext = (): ItemGroupProps =>
  SelectItemGroupPropsContext.get();
