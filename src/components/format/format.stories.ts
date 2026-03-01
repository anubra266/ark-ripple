import type { Meta } from '@storybook/html-vite';
import { ByteBasic as ByteBasicExample } from './examples/byte-basic.ripple';
import { ByteSizes as ByteSizesExample } from './examples/byte-sizes.ripple';
import { ByteWithLocale as ByteWithLocaleExample } from './examples/byte-with-locale.ripple';
import { ByteWithUnit as ByteWithUnitExample } from './examples/byte-with-unit.ripple';
import { ByteWithUnitDisplay as ByteWithUnitDisplayExample } from './examples/byte-with-unit-display.ripple';
import { ByteWithUnitSystem as ByteWithUnitSystemExample } from './examples/byte-with-unit-system.ripple';
import { NumberBasic as NumberBasicExample } from './examples/number-basic.ripple';
import { NumberWithCompact as NumberWithCompactExample } from './examples/number-with-compact.ripple';
import { NumberWithCurrency as NumberWithCurrencyExample } from './examples/number-with-currency.ripple';
import { NumberWithLocale as NumberWithLocaleExample } from './examples/number-with-locale.ripple';
import { NumberWithPercentage as NumberWithPercentageExample } from './examples/number-with-percentage.ripple';
import { NumberWithUnit as NumberWithUnitExample } from './examples/number-with-unit.ripple';
import { RelativeTimeBasic as RelativeTimeBasicExample } from './examples/relative-time-basic.ripple';
import { RelativeTimeShort as RelativeTimeShortExample } from './examples/relative-time-short.ripple';
import { TimeBasic as TimeBasicExample } from './examples/time-basic.ripple';
import { TimeWithAmPmLabels as TimeWithAmPmLabelsExample } from './examples/time-with-am-pm-labels.ripple';
import { TimeWithDate as TimeWithDateExample } from './examples/time-with-date.ripple';
import { TimeWithLocale as TimeWithLocaleExample } from './examples/time-with-locale.ripple';
import { TimeWithSeconds as TimeWithSecondsExample } from './examples/time-with-seconds.ripple';

const meta: Meta = {
	title: 'Utilities / Format',
};

export default meta;

export const ByteBasic = { render: () => ({ Component: ByteBasicExample }) };
export const ByteSizes = { render: () => ({ Component: ByteSizesExample }) };
export const ByteWithLocale = { render: () => ({ Component: ByteWithLocaleExample }) };
export const ByteWithUnit = { render: () => ({ Component: ByteWithUnitExample }) };
export const ByteWithUnitDisplay = { render: () => ({ Component: ByteWithUnitDisplayExample }) };
export const ByteWithUnitSystem = { render: () => ({ Component: ByteWithUnitSystemExample }) };

export const NumberBasic = { render: () => ({ Component: NumberBasicExample }) };
export const NumberWithCompact = { render: () => ({ Component: NumberWithCompactExample }) };
export const NumberWithCurrency = { render: () => ({ Component: NumberWithCurrencyExample }) };
export const NumberWithLocale = { render: () => ({ Component: NumberWithLocaleExample }) };
export const NumberWithPercentage = { render: () => ({ Component: NumberWithPercentageExample }) };
export const NumberWithUnit = { render: () => ({ Component: NumberWithUnitExample }) };

export const RelativeTimeBasic = { render: () => ({ Component: RelativeTimeBasicExample }) };
export const RelativeTimeShort = { render: () => ({ Component: RelativeTimeShortExample }) };

export const TimeBasic = { render: () => ({ Component: TimeBasicExample }) };
export const TimeWithAmPmLabels = { render: () => ({ Component: TimeWithAmPmLabelsExample }) };
export const TimeWithDate = { render: () => ({ Component: TimeWithDateExample }) };
export const TimeWithLocale = { render: () => ({ Component: TimeWithLocaleExample }) };
export const TimeWithSeconds = { render: () => ({ Component: TimeWithSecondsExample }) };
