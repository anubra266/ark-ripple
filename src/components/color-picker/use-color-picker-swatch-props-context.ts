import { Context } from 'ripple';
import type { SwatchProps } from '@zag-js/color-picker';

export const ColorPickerSwatchPropsContext = new Context<SwatchProps>();

export const useColorPickerSwatchPropsContext = (): SwatchProps =>
	ColorPickerSwatchPropsContext.get();
