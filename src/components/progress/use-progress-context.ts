import { Context } from 'ripple';
import type { UseProgressReturn } from './use-progress.ripple';

export type UseProgressContext = UseProgressReturn;

export const ProgressApiContext = new Context<UseProgressContext>();

export const useProgressContext = (): UseProgressContext => ProgressApiContext.get();
