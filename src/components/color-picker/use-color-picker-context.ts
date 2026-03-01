import { Context } from 'ripple';
import type { UseColorPickerReturn } from './use-color-picker.ripple';

export type UseColorPickerContext = UseColorPickerReturn;

export const ColorPickerApiContext = new Context<UseColorPickerContext>();

export const useColorPickerContext = (): UseColorPickerContext => ColorPickerApiContext.get();
