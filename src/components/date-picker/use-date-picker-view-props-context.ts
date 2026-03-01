import { Context } from 'ripple';
import type { ViewProps } from '@zag-js/date-picker';

export const DatePickerViewPropsContext = new Context<Required<ViewProps>>();

export const useDatePickerViewPropsContext = (): Required<ViewProps> =>
	DatePickerViewPropsContext.get();
