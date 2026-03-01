import { Context } from 'ripple';
import type { UseSliderReturn } from './use-slider.ripple';

export type UseSliderContext = UseSliderReturn;

export const SliderApiContext = new Context<UseSliderContext>();

export const useSliderContext = (): UseSliderContext => SliderApiContext.get();
