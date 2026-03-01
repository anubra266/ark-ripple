import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';
import { SelectWithField } from './field.ripple';
import { MaxSelectedTest } from './max-selected.ripple';
import { ControlledSelectTest } from './controlled-test.ripple';

describe('Select', () => {
  it('should handle item selection', async () => {
    render(ComponentUnderTest);

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    const item = screen.getByText('React', { ignore: 'option' });
    await user.click(item);

    await waitFor(() => expect(trigger).toHaveTextContent('React'));
  });

  it('should close on select', async () => {
    render(ComponentUnderTest);

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    const item = screen.getByText('React', { ignore: 'option' });
    await user.click(item);

    await waitFor(() => expect(screen.queryByText('Frameworks')).not.toBeVisible());
  });

  it('should be disabled when disabled is true', async () => {
    render(ComponentUnderTest, { disabled: true });

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    expect(trigger).toBeDisabled();
  });

  it('should handle multiple selection', async () => {
    render(ComponentUnderTest, { multiple: true });

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    const itemReact = screen.getByText('React', { ignore: 'option' });
    const itemVue = screen.getByText('Vue', { ignore: 'option' });

    await user.click(itemReact);
    await user.click(itemVue);

    await waitFor(() => expect(trigger).toHaveTextContent('React, Vue'));
  });

  it('should call onValueChange when item is selected', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { onValueChange });

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    const item = screen.getByText('React', { ignore: 'option' });
    await user.click(item);

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledTimes(1);
    });
  });

  it('should open menu when onOpenChange is called', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { onOpenChange });

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    await waitFor(() => expect(onOpenChange).toHaveBeenCalledTimes(1));
  });

  it('should be read-only when readOnly is true', async () => {
    render(ComponentUnderTest, { readOnly: true });

    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);

    await waitFor(() =>
      expect(screen.queryByText('React', { ignore: 'option' })).not.toBeVisible(),
    );
  });

  it('should be able to lazy mount its items', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    await user.click(screen.getByRole('combobox', { name: 'Framework' }));
    expect(screen.getByTestId('positioner')).toBeInTheDocument();
  });

  it('should be able to lazy mount and unmount its items', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    await user.click(screen.getByRole('combobox', { name: 'Framework' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    await user.click(screen.getByRole('combobox', { name: 'Framework' }));
    await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
  });
});

describe('Select / Controlled', () => {
  it('should update value text in controlled mode', async () => {
    render(ControlledSelectTest);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);
    await user.click(screen.getByText('React', { ignore: 'option' }));
    await waitFor(() => expect(screen.getByTestId('value-text')).toHaveTextContent('React'));
  });
});

describe('Select / Max Selected', () => {
  it('should update value text immediately after selecting an item', async () => {
    render(MaxSelectedTest);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);
    await user.click(screen.getByText('React', { ignore: 'option' }));
    await waitFor(() => expect(screen.getByTestId('value-text')).toHaveTextContent('React'));
  });

  it('should update value text after selecting multiple items', async () => {
    render(MaxSelectedTest);
    const trigger = screen.getByRole('combobox', { name: 'Framework' });
    await user.click(trigger);
    await user.click(screen.getByText('React', { ignore: 'option' }));
    await user.click(screen.getByText('Solid', { ignore: 'option' }));
    await waitFor(() => expect(screen.getByTestId('value-text')).toHaveTextContent('React, Solid'));
  });
});

describe('Select / Field', () => {
  it('should set combobox as required', async () => {
    render(SelectWithField, { required: true });
    expect(screen.getAllByRole('combobox', { hidden: true })[1]).toBeRequired();
  });

  it('should set input as disabled', async () => {
    render(SelectWithField, { disabled: true });
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('should set input as readonly', async () => {
    render(SelectWithField, { readOnly: true });
    expect(screen.getByRole('combobox')).toHaveAttribute('data-readonly');
  });

  it('should display helper text', async () => {
    render(SelectWithField);
    expect(screen.getByText('Additional Info')).toBeInTheDocument();
  });

  it('should display error text when error is present', async () => {
    render(SelectWithField, { invalid: true });
    expect(screen.getByText('Error Info')).toBeInTheDocument();
  });

  it('should focus on combobox when label is clicked', async () => {
    render(SelectWithField);
    await user.click(screen.getByText(/label/i));
    expect(screen.getByRole('combobox', { name: /label/i })).toHaveFocus();
  });

  it('should not display error text when no error is present', async () => {
    render(SelectWithField);
    expect(screen.queryByText('Error Info')).not.toBeInTheDocument();
  });
});
