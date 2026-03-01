import { Context } from 'ripple';
import type { TableProps } from '@zag-js/date-picker';

export type DatePickerTablePropsContext = TableProps & { id: string };

export const DatePickerTablePropsContext = new Context<DatePickerTablePropsContext>();

export const useDatePickerTablePropsContext = (): DatePickerTablePropsContext =>
  DatePickerTablePropsContext.get();
