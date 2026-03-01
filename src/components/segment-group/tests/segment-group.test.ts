import user from '@testing-library/user-event';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Segment Group', () => {
  it('should render the label', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByText('Framework')).toBeInTheDocument();
  });

  it('should render all items', () => {
    const { container } = render(ComponentUnderTest, {});
    const inputs = container.querySelectorAll('input[type="radio"]');
    expect(inputs.length).toBe(4);
  });

  it('should invoke onValueChange when another value is selected', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { onValueChange });
    await user.click(screen.getByText('Solid'));
    expect(onValueChange).toHaveBeenCalledWith({ value: 'solid' });
  });

  it('should not invoke onValueChange if option is disabled', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { onValueChange });
    await user.click(screen.getByText('Svelte'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('should select item on click', async () => {
    render(ComponentUnderTest, {});
    await user.click(screen.getByText('React'));
    const input = screen.getByDisplayValue('react');
    expect(input).toBeChecked();
  });

  it('should change selection', async () => {
    render(ComponentUnderTest, { defaultValue: 'react' });
    await user.click(screen.getByText('Solid'));
    expect(screen.getByDisplayValue('solid')).toBeChecked();
    expect(screen.getByDisplayValue('react')).not.toBeChecked();
  });
});
