import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Field / Input', () => {
  it('should set textbox as required', async () => {
    render(ComponentUnderTest, { required: true });
    expect(screen.getByRole('textbox', { name: /label/i })).toBeRequired();
  });

  it('should set textbox as disabled', async () => {
    render(ComponentUnderTest, { disabled: true });
    expect(screen.getByRole('textbox', { name: /label/i })).toBeDisabled();
    expect(document.querySelector('[data-part="root"]')).toHaveAttribute('data-disabled');
  });

  it('should set textbox as readonly', async () => {
    render(ComponentUnderTest, { readOnly: true });
    expect(screen.getByRole('textbox', { name: /label/i })).toHaveAttribute('readonly');
  });

  it('should display helper text', async () => {
    render(ComponentUnderTest);
    expect(screen.getByText('Some additional Info')).toBeInTheDocument();
  });

  it('should display error text when invalid', async () => {
    render(ComponentUnderTest, { invalid: true });
    expect(screen.getByText('Error Info')).toBeInTheDocument();
  });

  it('should not display error text when not invalid', async () => {
    render(ComponentUnderTest);
    expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
  });

  it('should focus on input when label is clicked', async () => {
    render(ComponentUnderTest);
    const label = document.querySelector('label')!;
    await user.click(label);
    expect(screen.getByRole('textbox', { name: /label/i })).toHaveFocus();
  });

  it('should set aria-describedby with helper text id', async () => {
    render(ComponentUnderTest);
    const textbox = screen.getByRole('textbox', { name: /label/i });
    await waitFor(() =>
      expect(textbox).toHaveAttribute('aria-describedby', expect.stringContaining('helper-text')),
    );
  });

  it('should set aria-describedby with error text id when invalid', async () => {
    render(ComponentUnderTest, { invalid: true });
    const textbox = screen.getByRole('textbox', { name: /label/i });
    await waitFor(() => {
      const describedBy = textbox.getAttribute('aria-describedby');
      expect(describedBy).toContain('error-text');
      expect(describedBy).toContain('helper-text');
    });
  });
});
