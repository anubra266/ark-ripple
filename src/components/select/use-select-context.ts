import { Context } from 'ripple';
import type { UseSelectReturn } from './use-select.ripple';

export type UseSelectContext = UseSelectReturn;

export const SelectApiContext = new Context<UseSelectContext>();

export const useSelectContext = (): UseSelectContext => SelectApiContext.get();
