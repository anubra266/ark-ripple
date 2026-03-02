import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { ComponentUnderTest, NumberInputWithField } from './basic.ripple';

describe('NumberInput', () => {
  it('should render the number input', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });
  });

  it('should handle wheel event when allowMouseWheel is true', async () => {
    render(ComponentUnderTest, { allowMouseWheel: true });

    const input = screen.getByRole('spinbutton');

    input.focus();
    await waitFor(() => expect(input).toHaveFocus());

    fireEvent.wheel(input, { deltaY: -1 });
    await waitFor(() => expect(input).toHaveValue('1'));
  });

  it('should clamp value on blur when clampValueOnBlur is true', async () => {
    render(ComponentUnderTest, { clampValueOnBlur: true, min: 0, max: 10, defaultValue: '15' });

    const input = screen.getByRole('spinbutton');

    await user.click(input);
    await waitFor(() => expect(input).toHaveFocus());

    await user.tab();

    await waitFor(() => {
      expect(input).toHaveValue('10');
    });
  });

  it('should allow value to exceed max when allowOverflow is true', async () => {
    render(ComponentUnderTest, { allowOverflow: true, max: 10, defaultValue: '15' });

    const input = screen.getByRole('spinbutton');

    expect(input).toHaveValue('15');
  });

  it('should handle custom format options', async () => {
    render(ComponentUnderTest, {
      formatOptions: { currency: 'USD' },
      defaultValue: '5',
    });

    const input = screen.getByRole('spinbutton');

    await waitFor(() => {
      expect(input).toHaveValue('5');
    });
  });

  it('should increment value by step when using increment button', async () => {
    render(ComponentUnderTest, { step: 5, defaultValue: '0' });

    const incrementBtn = screen.getByText('+1');

    await user.click(incrementBtn);

    const input = screen.getByRole('spinbutton');

    await waitFor(() => {
      expect(input).toHaveValue('5');
    });
  });

  it('should handle min and max fraction digits', async () => {
    render(ComponentUnderTest, {
      defaultValue: '1.00',
      formatOptions: { minimumFractionDigits: 2, maximumFractionDigits: 3 },
    });

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue('1.00');

    await user.click(input);
    await waitFor(() => expect(input).toHaveFocus());

    await user.clear(input);
    await user.type(input, '1.1234', { delay: 20 });

    await user.tab();

    await waitFor(() => expect(input).toHaveValue('1.123'));
  });
});

describe('NumberInput / Field', () => {
  it('should set input as required', async () => {
    render(NumberInputWithField, { required: true });
    await waitFor(() => {
      expect(screen.getByRole('spinbutton', { name: /label/i })).toBeRequired();
    });
  });

  it('should set input as disabled', async () => {
    render(NumberInputWithField, { disabled: true });
    await waitFor(() => {
      expect(screen.getByRole('spinbutton', { name: /label/i })).toBeDisabled();
    });
  });

  it('should set input as readonly', async () => {
    render(NumberInputWithField, { readOnly: true });
    await waitFor(() => {
      expect(screen.getByRole('spinbutton', { name: /label/i })).toHaveAttribute('readonly');
    });
  });

  it('should display helper text', async () => {
    render(NumberInputWithField);
    await waitFor(() => {
      expect(screen.getByText('Additional Info')).toBeInTheDocument();
    });
  });

  it('should display error text when error is present', async () => {
    render(NumberInputWithField, { invalid: true });
    await waitFor(() => {
      expect(screen.getByText('Error Info')).toBeInTheDocument();
    });
  });

  it('should focus on input when label is clicked', async () => {
    render(NumberInputWithField);
    await waitFor(() => {
      expect(screen.getByText(/label/i)).toBeInTheDocument();
    });
    await user.click(screen.getByText(/label/i));
    await waitFor(() => {
      expect(screen.getByRole('spinbutton', { name: /label/i })).toHaveFocus();
    });
  });

  it('should not display error text when no error is present', async () => {
    render(NumberInputWithField);
    await waitFor(() => {
      expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
    });
  });
});
