import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { ComponentUnderTest, PasswordInputWithField } from './basic.ripple';

describe('PasswordInput', () => {
  it('should render the password input', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });
  });

  it('should have type password by default', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
    });
  });

  it('should toggle visibility when trigger is clicked', async () => {
    render(ComponentUnderTest);
    const input = screen.getByLabelText('Password');

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'password');
    });

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'text');
    });

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'password');
    });
  });

  it('should show indicator content based on visibility', async () => {
    render(ComponentUnderTest);

    await waitFor(() => {
      expect(screen.getByText('Hide')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Show')).toBeInTheDocument();
    });
  });

  it('should handle controlled visibility', async () => {
    render(ComponentUnderTest, { visible: true });
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
    });
  });

  it('should handle default visibility', async () => {
    render(ComponentUnderTest, { defaultVisible: true });
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
    });
  });

  it('should call onVisibilityChange when visibility changes', async () => {
    const onVisibilityChange = vi.fn();
    render(ComponentUnderTest, { onVisibilityChange });

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(onVisibilityChange).toHaveBeenCalledWith(expect.objectContaining({ visible: true }));
    });
  });

  it('should allow typing in the input', async () => {
    render(ComponentUnderTest);
    const input = screen.getByLabelText('Password');

    await user.type(input, 'secret123');

    await waitFor(() => {
      expect(input).toHaveValue('secret123');
    });
  });
});

describe('PasswordInput / Field', () => {
  it('should set input as required', async () => {
    render(PasswordInputWithField, { required: true });
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toBeRequired();
    });
  });

  it('should set input as disabled', async () => {
    render(PasswordInputWithField, { disabled: true });
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toBeDisabled();
    });
  });

  it('should set input as readonly', async () => {
    render(PasswordInputWithField, { readOnly: true });
    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toHaveAttribute('readonly');
    });
  });

  it('should display helper text', async () => {
    render(PasswordInputWithField);
    await waitFor(() => {
      expect(screen.getByText('Additional Info')).toBeInTheDocument();
    });
  });

  it('should display error text when error is present', async () => {
    render(PasswordInputWithField, { invalid: true });
    await waitFor(() => {
      expect(screen.getByText('Error Info')).toBeInTheDocument();
    });
  });

  it('should not display error text when no error is present', async () => {
    render(PasswordInputWithField);
    await waitFor(() => {
      expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
    });
  });
});
