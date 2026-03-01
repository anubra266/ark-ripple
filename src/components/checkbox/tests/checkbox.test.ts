import user from '@testing-library/user-event';
import { fireEvent, screen, waitFor } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';
import { ControlledComponentUnderTest } from './controlled.ripple';
import { GroupUnderTest } from './group.ripple';
import { GroupControlledUnderTest } from './group-controlled.ripple';

describe('Checkbox', () => {
  it('should handle check and uncheck', async () => {
    render(ComponentUnderTest);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should invoke onCheckedChange', async () => {
    const onCheckedChange = vi.fn();
    render(ComponentUnderTest, { onCheckedChange });

    const label = screen.getByText('Checkbox');
    fireEvent.click(label);
    await waitFor(() => expect(onCheckedChange).toHaveBeenCalledWith({ checked: true }));
  });

  it('should handle indeterminate state', async () => {
    render(ComponentUnderTest, { checked: 'indeterminate' });

    expect(screen.getByTestId('control')).toHaveAttribute('data-state', 'indeterminate');
  });

  it('should allow controlled usage', async () => {
    render(ControlledComponentUnderTest);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(screen.getByText('set checked'));
    await waitFor(() => expect(checkbox).toBeChecked());
  });
});

describe('Checkbox / Group', () => {
  it('should check an item in the group', async () => {
    render(GroupUnderTest);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();
  });

  it('should check multiple items independently', async () => {
    render(GroupUnderTest);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await user.click(checkboxes[2]);
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
    expect(checkboxes[2]).toBeChecked();
  });

  it('should uncheck an already checked item', async () => {
    render(GroupUnderTest, { defaultValue: ['one', 'two'] });

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    await user.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  it('should initialize with defaultValue', async () => {
    render(GroupUnderTest, { defaultValue: ['two'] });

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
    expect(checkboxes[2]).not.toBeChecked();
  });

  it('should invoke onValueChange when checking an item', async () => {
    const onValueChange = vi.fn();
    render(GroupUnderTest, { onValueChange });

    await user.click(screen.getByText('Two'));
    await waitFor(() => expect(onValueChange).toHaveBeenCalledWith(['two']));
  });

  it('should invoke onValueChange when unchecking an item', async () => {
    const onValueChange = vi.fn();
    render(GroupUnderTest, { defaultValue: ['one', 'two'], onValueChange });

    await user.click(screen.getByText('One'));
    await waitFor(() => expect(onValueChange).toHaveBeenCalledWith(['two']));
  });

  it('should disable all items when group is disabled', async () => {
    render(GroupUnderTest, { disabled: true });

    const checkboxes = screen.getAllByRole('checkbox');
    for (const cb of checkboxes) {
      expect(cb).toBeDisabled();
    }
  });

  it('should allow controlled group usage', async () => {
    render(GroupControlledUnderTest);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();

    await user.click(checkboxes[1]);
    await waitFor(() => {
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).toBeChecked();
    });
  });

  it('should reflect controlled value changes', async () => {
    render(GroupControlledUnderTest);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await waitFor(() => expect(checkboxes[0]).not.toBeChecked());
  });
});
