import { Context } from 'ripple';
import type { AreaProps } from '@zag-js/color-picker';

export const ColorPickerAreaPropsContext = new Context<AreaProps>();

export const useColorPickerAreaPropsContext = (): AreaProps => ColorPickerAreaPropsContext.get();
