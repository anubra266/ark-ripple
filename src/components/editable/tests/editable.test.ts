import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest, EditableWithField } from './basic.ripple';

describe('Editable', () => {
  it('should be possible to focus the preview and enter a value', async () => {
    render(ComponentUnderTest);

    screen.getByText('Placeholder').focus();
    await waitFor(() => expect(screen.getByText('Placeholder')).toHaveFocus());

    const input = screen.getByRole('textbox');

    await user.clear(input);
    await waitFor(() => expect(input).toHaveValue(''));

    await user.type(input, 'React');
    await user.keyboard('{enter}');

    await screen.findByText('React');
  });

  it('should be possible to dblclick the preview to enter a value', async () => {
    render(ComponentUnderTest, { activationMode: 'dblclick' });

    await user.dblClick(screen.getByText('Placeholder'));

    const input = screen.getByRole('textbox');

    await user.clear(input);
    await waitFor(() => expect(input).toHaveValue(''));

    await user.type(input, 'React{enter}', { delay: 10 });
    await screen.findByText('React');
  });

  it('should be possible to edit an existing value', async () => {
    render(ComponentUnderTest, { activationMode: 'dblclick', defaultValue: 'React' });

    await user.dblClick(screen.getByText('React'));

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await waitFor(() => expect(input).toHaveValue(''));

    await user.type(input, 'Solid', { delay: 10 });
    await user.click(screen.getByText('Save'));

    await screen.findByText('Solid');
  });

  it('should hide input when cancel trigger is clicked', async () => {
    render(ComponentUnderTest, { activationMode: 'dblclick' });

    await user.dblClick(screen.getByText('Placeholder'));

    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('hidden', '');

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(input).toHaveAttribute('hidden', '');
  });
});

describe('Editable / Field', () => {
  it('should set editable as required', async () => {
    render(EditableWithField, { required: true });
    expect(screen.getByRole('textbox', { hidden: true })).toBeRequired();
  });

  it('should set editable as disabled', async () => {
    render(EditableWithField, { disabled: true });
    expect(screen.getByRole('textbox', { hidden: true })).toBeDisabled();
  });

  it('should set editable as readonly', async () => {
    render(EditableWithField, { readOnly: true });
    expect(screen.getByRole('textbox', { hidden: true })).toHaveAttribute('readonly');
  });

  it('should display helper text', async () => {
    render(EditableWithField);
    expect(screen.getByText('Additional Info')).toBeInTheDocument();
  });

  it('should display error text when error is present', async () => {
    render(EditableWithField, { invalid: true });
    expect(screen.getByText('Error Info')).toBeInTheDocument();
  });

  it('should not display error text when no error is present', async () => {
    render(EditableWithField);
    expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
  });
});
