import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DefaultValue as DefaultValueExample } from './examples/default-value.ripple';
import { DefaultView as DefaultViewExample } from './examples/default-view.ripple';
import { FixedWeeks as FixedWeeksExample } from './examples/fixed-weeks.ripple';
import { Form as FormExample } from './examples/form.ripple';
import { FormatParse as FormatParseExample } from './examples/format-parse.ripple';
import { Inline as InlineExample } from './examples/inline.ripple';
import { Locale as LocaleExample } from './examples/locale.ripple';
import { MaxSelectedDates as MaxSelectedDatesExample } from './examples/max-selected-dates.ripple';
import { MinMax as MinMaxExample } from './examples/min-max.ripple';
import { MonthPicker as MonthPickerExample } from './examples/month-picker.ripple';
import { MonthPickerRange as MonthPickerRangeExample } from './examples/month-picker-range.ripple';
import { MonthYearSelect as MonthYearSelectExample } from './examples/month-year-select.ripple';
import { MultiSelection as MultiSelectionExample } from './examples/multi-selection.ripple';
import { MultipleMonths as MultipleMonthsExample } from './examples/multiple-months.ripple';
import { OpenOnClick as OpenOnClickExample } from './examples/open-on-click.ripple';
import { Presets as PresetsExample } from './examples/presets.ripple';
import { RangeSelection as RangeSelectionExample } from './examples/range-selection.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SelectToday as SelectTodayExample } from './examples/select-today.ripple';
import { TriggerValue as TriggerValueExample } from './examples/trigger-value.ripple';
import { Unavailable as UnavailableExample } from './examples/unavailable.ripple';
import { WeekNumbers as WeekNumbersExample } from './examples/week-numbers.ripple';
import { WithTime as WithTimeExample } from './examples/with-time.ripple';
import { YearPicker as YearPickerExample } from './examples/year-picker.ripple';
import { YearPickerRange as YearPickerRangeExample } from './examples/year-picker-range.ripple';

const meta: Meta = {
	title: 'Components/DatePicker',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const DefaultValue = {
	render: () => ({ Component: DefaultValueExample }),
};

export const DefaultView = {
	render: () => ({ Component: DefaultViewExample }),
};

export const FixedWeeks = {
	render: () => ({ Component: FixedWeeksExample }),
};

export const Form = {
	render: () => ({ Component: FormExample }),
};

export const FormatParse = {
	render: () => ({ Component: FormatParseExample }),
};

export const Inline = {
	render: () => ({ Component: InlineExample }),
};

export const Locale = {
	render: () => ({ Component: LocaleExample }),
};

export const MaxSelectedDates = {
	render: () => ({ Component: MaxSelectedDatesExample }),
};

export const MinMax = {
	render: () => ({ Component: MinMaxExample }),
};

export const MonthPicker = {
	render: () => ({ Component: MonthPickerExample }),
};

export const MonthPickerRange = {
	render: () => ({ Component: MonthPickerRangeExample }),
};

export const MonthYearSelect = {
	render: () => ({ Component: MonthYearSelectExample }),
};

export const MultiSelection = {
	render: () => ({ Component: MultiSelectionExample }),
};

export const MultipleMonths = {
	render: () => ({ Component: MultipleMonthsExample }),
};

export const OpenOnClick = {
	render: () => ({ Component: OpenOnClickExample }),
};

export const Presets = {
	render: () => ({ Component: PresetsExample }),
};

export const RangeSelection = {
	render: () => ({ Component: RangeSelectionExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const SelectToday = {
	render: () => ({ Component: SelectTodayExample }),
};

export const TriggerValue = {
	render: () => ({ Component: TriggerValueExample }),
};

export const Unavailable = {
	render: () => ({ Component: UnavailableExample }),
};

export const WeekNumbers = {
	render: () => ({ Component: WeekNumbersExample }),
};

export const WithTime = {
	render: () => ({ Component: WithTimeExample }),
};

export const YearPicker = {
	render: () => ({ Component: YearPickerExample }),
};

export const YearPickerRange = {
	render: () => ({ Component: YearPickerRangeExample }),
};
