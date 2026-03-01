import { Context } from 'ripple';
import type { UseCarouselReturn } from './use-carousel.ripple';

export type UseCarouselContext = UseCarouselReturn;

export const CarouselApiContext = new Context<UseCarouselContext>();

export const useCarouselContext = (): UseCarouselContext => CarouselApiContext.get();
