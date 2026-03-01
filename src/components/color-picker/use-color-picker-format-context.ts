import { Context } from 'ripple';
import type { ColorFormat } from '@zag-js/color-picker';

export interface UseColorPickerFormatContext {
	format: ColorFormat;
}

export const ColorPickerFormatContext = new Context<UseColorPickerFormatContext | undefined>(
	undefined,
);

export const useColorPickerFormatContext = (): UseColorPickerFormatContext | undefined =>
	ColorPickerFormatContext.get();
