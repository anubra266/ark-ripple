import { render, screen } from '../../../test-utils';
import {
  FormatByteTest,
  FormatNumberTest,
  FormatNumberWithLocaleTest,
  FormatRelativeTimeTest,
} from './basic.ripple';

describe('FormatNumber', () => {
  it('should render a formatted number', () => {
    render(FormatNumberTest, { value: 1450.45 });
    expect(screen.getByTestId('output')).toHaveTextContent('1,450.45');
  });

  it('should render a formatted currency', () => {
    render(FormatNumberTest, { value: 1234.45, style: 'currency', currency: 'USD' });
    expect(screen.getByTestId('output')).toHaveTextContent('$1,234.45');
  });

  it('should render a formatted percentage', () => {
    render(FormatNumberTest, { value: 0.145, style: 'percent', maximumFractionDigits: 2 });
    expect(screen.getByTestId('output')).toHaveTextContent('14.5%');
  });

  it('should use locale from LocaleProvider', () => {
    render(FormatNumberWithLocaleTest);
    // German locale uses period as thousands separator and comma as decimal
    expect(screen.getByTestId('output').textContent).toMatch(/1\.450,45/);
  });
});

describe('FormatByte', () => {
  it('should render a formatted byte size', () => {
    render(FormatByteTest, { value: 120000 });
    expect(screen.getByTestId('output')).toHaveTextContent('120 kB');
  });

  it('should render with bit unit', () => {
    render(FormatByteTest, { value: 1000, unit: 'bit' });
    expect(screen.getByTestId('output')).toHaveTextContent('1 kb');
  });

  it('should render with binary unit system', () => {
    render(FormatByteTest, { value: 1024, unitSystem: 'binary' });
    expect(screen.getByTestId('output')).toHaveTextContent('1 kB');
  });
});

describe('FormatRelativeTime', () => {
  it('should render a relative time string', () => {
    render(FormatRelativeTimeTest, { value: new Date('2025-05-05') });
    expect(screen.getByTestId('output').textContent).toBeTruthy();
  });

  it('should render with short style', () => {
    render(FormatRelativeTimeTest, { value: new Date('2025-05-05'), style: 'short' });
    expect(screen.getByTestId('output').textContent).toBeTruthy();
  });
});
