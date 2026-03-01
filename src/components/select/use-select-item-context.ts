import { Context } from 'ripple';
import type { ItemState } from '@zag-js/select';

export type UseSelectItemContext = ItemState;

export const SelectItemApiContext = new Context<UseSelectItemContext>();

export const useSelectItemContext = (): UseSelectItemContext => SelectItemApiContext.get();
