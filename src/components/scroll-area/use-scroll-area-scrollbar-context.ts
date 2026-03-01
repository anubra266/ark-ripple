import type { ScrollbarProps } from '@zag-js/scroll-area';
import { Context } from 'ripple';

export const ScrollAreaScrollbarContext = new Context<ScrollbarProps>();

export const useScrollAreaScrollbarContext = (): ScrollbarProps => ScrollAreaScrollbarContext.get();
