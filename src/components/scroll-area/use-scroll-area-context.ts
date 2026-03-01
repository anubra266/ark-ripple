import { Context } from 'ripple';
import type { UseScrollAreaReturn } from './use-scroll-area.ripple';

export type UseScrollAreaContext = UseScrollAreaReturn;

export const ScrollAreaApiContext = new Context<UseScrollAreaContext>();

export const useScrollAreaContext = (): UseScrollAreaContext => ScrollAreaApiContext.get();
