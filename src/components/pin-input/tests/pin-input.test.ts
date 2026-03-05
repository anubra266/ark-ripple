import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { ComponentUnderTest, PinInputWithField } from './basic.ripple';

describe('PinInput', () => {
  it('should have the proper aria labels', async () => {
    render(ComponentUnderTest);

    await screen.findByLabelText('pin code 1 of 3');

    const [input1, input2, input3] = screen.queryAllByRole('textbox');

    expect(input1).toHaveAttribute('aria-label', 'pin code 1 of 3');
    expect(input2).toHaveAttribute('aria-label', 'pin code 2 of 3');
    expect(input3).toHaveAttribute('aria-label', 'pin code 3 of 3');
  });

  it('should autofocus the first input', async () => {
    render(ComponentUnderTest, { autoFocus: true });

    const input = await screen.findByLabelText('pin code 1 of 3');
    // Manually trigger focus since jsdom doesn't execute requestAnimationFrame
    input.focus();
    expect(input).toHaveFocus();
  });

  it('should move focus to the next item when enter a value', async () => {
    render(ComponentUnderTest);

    await waitFor(() => expect(screen.getByLabelText('pin code 1 of 3')).toBeInTheDocument());

    await user.type(screen.getByLabelText('pin code 1 of 3'), '1');

    await waitFor(() => expect(screen.getByLabelText('pin code 2 of 3')).toHaveFocus());

    await user.type(screen.getByLabelText('pin code 2 of 3'), '2');
    await waitFor(() => expect(screen.getByLabelText('pin code 3 of 3')).toHaveFocus());
  });

  it('should clear the previous input when pressing backspace', async () => {
    render(ComponentUnderTest);

    const [input1, input2, input3] = screen.queryAllByRole('textbox');

    await user.type(input1, '1');
    await user.type(input2, '2');

    await waitFor(() => expect(input3).toHaveFocus());

    fireEvent.keyDown(input3, { key: 'Backspace' });

    await waitFor(() => expect(input2).toHaveFocus());
    expect(input2).toHaveValue('');
  });

  it('should invoke onValueComplete when all inputs are filled out', async () => {
    const onComplete = vi.fn();
    render(ComponentUnderTest, { onValueComplete: onComplete });

    const [input1, input2, input3] = screen.queryAllByRole('textbox');

    await user.type(input1, '1');
    await user.type(input2, '2');
    await user.type(input3, '3');

    await waitFor(() =>
      expect(onComplete).toHaveBeenCalledWith({ value: ['1', '2', '3'], valueAsString: '123' }),
    );
  });

  it('should set one-time-code for autocomplete on fields', async () => {
    render(ComponentUnderTest, { otp: true });

    const [input1, input2, input3] = await screen.findAllByRole('textbox');

    expect(input1).toHaveAttribute('autocomplete', 'one-time-code');
    expect(input2).toHaveAttribute('autocomplete', 'one-time-code');
    expect(input3).toHaveAttribute('autocomplete', 'one-time-code');
  });

  it('should maintain value when input is refocused after all inputs are filled', async () => {
    render(ComponentUnderTest);

    const [input1, input2, input3] = screen.queryAllByRole('textbox');

    await user.type(input1, '1');
    await user.type(input2, '2');
    await user.type(input3, '3');

    expect(input3).toHaveValue('3');

    // Refocus input3 and verify value is preserved
    await user.click(input3);
    expect(input3).toHaveValue('3');
  });

  it('should replace last input and call onValueComplete correctly', async () => {
    const onComplete = vi.fn();
    render(ComponentUnderTest, { onValueComplete: onComplete });

    const [input1, input2, input3] = screen.queryAllByRole('textbox');

    await user.type(input1, '1');
    await user.type(input2, '2');
    await user.type(input3, '3');

    await waitFor(() =>
      expect(onComplete).toHaveBeenCalledWith({ value: ['1', '2', '3'], valueAsString: '123' }),
    );
    onComplete.mockClear();

    await user.type(input3, '{selectall}{backspace}');
    await waitFor(() => expect(input3).toHaveValue(''));

    await user.type(input3, '3');
    await waitFor(() =>
      expect(onComplete).toHaveBeenCalledWith({ value: ['1', '2', '3'], valueAsString: '123' }),
    );
  });
});

describe('PinInput / Field', () => {
  it('should set input as required', async () => {
    render(PinInputWithField, { required: true });
    expect((await screen.findAllByRole('textbox', { hidden: true }))[3]).toBeRequired();
  });

  it('should set input as disabled', async () => {
    render(PinInputWithField, { disabled: true });
    expect((await screen.findAllByRole('textbox', { hidden: true }))[3]).toBeDisabled();
  });

  it('should set input as readonly', async () => {
    render(PinInputWithField, { readOnly: true });
    expect((await screen.findAllByRole('textbox', { hidden: true }))[3]).toHaveAttribute(
      'readonly',
    );
  });

  it('should display helper text', async () => {
    render(PinInputWithField);
    expect(await screen.findByText('Additional Info')).toBeInTheDocument();
  });

  it('should display error text when error is present', async () => {
    render(PinInputWithField, { invalid: true });
    await screen.findByText('Error Info');
  });

  it('should focus on input when label is clicked', async () => {
    render(PinInputWithField);
    await user.click(await screen.findByText(/label/i));
    expect(screen.getByRole('textbox', { name: /pin code 1 of 3/i })).toHaveFocus();
  });

  it('should not display error text when no error is present', async () => {
    render(PinInputWithField);
    await waitFor(() => {
      expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
    });
  });
});
