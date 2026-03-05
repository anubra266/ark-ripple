import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { ComponentUnderTest, SwitchWithField } from './basic.ripple';

describe('Switch', () => {
  it('should toggle state when clicked', async () => {
    const onCheckedChange = vi.fn();
    render(ComponentUnderTest, { onCheckedChange });

    const label = screen.getByText('Label');
    fireEvent.click(label);

    await waitFor(() => expect(onCheckedChange).toHaveBeenCalledWith({ checked: true }));
  });

  it('should not toggle when disabled', async () => {
    const onCheckedChange = vi.fn();
    render(ComponentUnderTest, { onCheckedChange, disabled: true });

    expect(screen.getByRole('checkbox')).toBeDisabled();

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('should show invalid attribute when invalid', async () => {
    render(ComponentUnderTest, { invalid: true });

    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should be required when required is true', async () => {
    render(ComponentUnderTest, { required: true });

    expect(screen.getByRole('checkbox')).toBeRequired();
  });

  it('should render with data-part="root"', async () => {
    const { container } = render(ComponentUnderTest);
    expect(container.querySelector('[data-part="root"]')).toBeInTheDocument();
  });

  it('should render control with data-part="control"', async () => {
    const { container } = render(ComponentUnderTest);
    expect(container.querySelector('[data-part="control"]')).toBeInTheDocument();
  });

  it('should render thumb with data-part="thumb"', async () => {
    const { container } = render(ComponentUnderTest);
    expect(container.querySelector('[data-part="thumb"]')).toBeInTheDocument();
  });

  it('should render hidden input as checkbox', async () => {
    render(ComponentUnderTest);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});

describe('Switch / Field', () => {
  it('should set checkbox as required', async () => {
    render(SwitchWithField, { required: true });
    expect(await screen.findByRole('checkbox', { name: /label/i })).toBeRequired();
  });

  it('should set input as disabled', async () => {
    render(SwitchWithField, { disabled: true });
    expect(await screen.findByRole('checkbox', { name: /label/i })).toBeDisabled();
  });

  it('should display helper text', async () => {
    render(SwitchWithField);
    expect(await screen.findByText('Additional Info')).toBeInTheDocument();
  });

  it('should display error text when error is present', async () => {
    render(SwitchWithField, { invalid: true });
    await screen.findByText('Error Info');
  });

  it('should focus on input when label is clicked', async () => {
    render(SwitchWithField);
    await user.click(await screen.findByText(/label/i));
    expect(screen.getByRole('checkbox', { name: /label/i })).toHaveFocus();
  });

  it('should not display error text when no error is present', async () => {
    render(SwitchWithField);
    await waitFor(() => {
      expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
    });
  });
});
