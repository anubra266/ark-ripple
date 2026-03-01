import user from '@testing-library/user-event';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Toggle', () => {
  it('should render toggle button', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have unpressed state by default', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'off');
  });

  it('should toggle on click', async () => {
    render(ComponentUnderTest, {});
    const button = screen.getByRole('button');
    await user.click(button);
    expect(button).toHaveAttribute('data-state', 'on');
  });

  it('should apply defaultPressed', () => {
    render(ComponentUnderTest, { defaultPressed: true });
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'on');
  });

  it('should invoke onPressedChange on click', async () => {
    const onPressedChange = vi.fn();
    render(ComponentUnderTest, { onPressedChange });
    await user.click(screen.getByRole('button'));
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  it('should be disabled when disabled prop is set', () => {
    render(ComponentUnderTest, { disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
