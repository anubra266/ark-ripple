import { Context } from 'ripple';
import type { UseDatePickerReturn } from './use-date-picker.ripple';

export type UseDatePickerContext = UseDatePickerReturn;

export const DatePickerApiContext = new Context<UseDatePickerContext>();

export const useDatePickerContext = (): UseDatePickerContext => DatePickerApiContext.get();
