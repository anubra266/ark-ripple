import { Context } from 'ripple';
import type { UseNumberInputReturn } from './use-number-input.ripple';

export type UseNumberInputContext = UseNumberInputReturn;

export const NumberInputApiContext = new Context<UseNumberInputContext>();

export const useNumberInputContext = (): UseNumberInputContext => NumberInputApiContext.get();
