import { Context } from 'ripple';
import type { DateValue } from '@zag-js/date-picker';

export interface DatePickerTableCellPropsContext {
  value: DateValue;
  disabled?: boolean | undefined;
  visibleRange?: { start: DateValue; end: DateValue } | undefined;
  columns?: number | undefined;
}

export const DatePickerTableCellPropsContext = new Context<DatePickerTableCellPropsContext>();

export const useDatePickerTableCellPropsContext = (): DatePickerTableCellPropsContext =>
  DatePickerTableCellPropsContext.get();
