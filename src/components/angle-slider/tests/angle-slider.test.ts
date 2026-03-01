import user from '@testing-library/user-event';
import { render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('AngleSlider', () => {
  it('should render with default value of 0', async () => {
    render(ComponentUnderTest);

    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '0');
  });

  it('should render with a specified defaultValue', async () => {
    render(ComponentUnderTest, { defaultValue: 90 });

    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '90');
  });

  it('should be disabled', async () => {
    render(ComponentUnderTest, { disabled: true });

    expect(screen.getByRole('slider')).not.toHaveAttribute('tabindex');
  });

  it('should increase value on ArrowRight key', async () => {
    render(ComponentUnderTest, { defaultValue: 0 });

    screen.getByRole('slider').focus();
    await user.keyboard('[ArrowRight]');

    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '1');
  });

  it('should decrease value on ArrowLeft key', async () => {
    render(ComponentUnderTest, { defaultValue: 90 });

    screen.getByRole('slider').focus();
    await user.keyboard('[ArrowLeft]');

    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '89');
  });

  it('should respect step when using keyboard', async () => {
    render(ComponentUnderTest, { defaultValue: 0, step: 15 });

    screen.getByRole('slider').focus();
    await user.keyboard('[ArrowRight]');

    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '15');
  });

  it('should call onValueChange when value changes', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { defaultValue: 0, onValueChange });

    screen.getByRole('slider').focus();
    await user.keyboard('[ArrowRight]');

    await waitFor(() => expect(onValueChange).toHaveBeenCalled());
  });
});
