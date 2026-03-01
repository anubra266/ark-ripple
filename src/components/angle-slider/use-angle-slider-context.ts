import { Context } from 'ripple';
import type { UseAngleSliderReturn } from './use-angle-slider.ripple';

export type UseAngleSliderContext = UseAngleSliderReturn;

export const AngleSliderApiContext = new Context<UseAngleSliderContext>();

export const useAngleSliderContext = (): UseAngleSliderContext => AngleSliderApiContext.get();
