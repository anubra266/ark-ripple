import { Context } from 'ripple';
import type { ThumbProps } from '@zag-js/slider';

export const SliderThumbPropsContext = new Context<ThumbProps>();

export const useSliderThumbPropsContext = (): ThumbProps => SliderThumbPropsContext.get();
