import { Context } from 'ripple';
import type { UseSwapReturn } from './use-swap.ripple';

export type UseSwapContext = UseSwapReturn;

export const SwapApiContext = new Context<UseSwapContext>();

export const useSwapContext = (): UseSwapContext => SwapApiContext.get();
