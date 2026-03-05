import { Context } from 'ripple';
import type { UseSplitterReturn } from './use-splitter.ripple';

export type UseSplitterContext = UseSplitterReturn;

export const SplitterApiContext = new Context<UseSplitterContext>();

export const useSplitterContext = (): UseSplitterContext => SplitterApiContext.get();
