import user from '@testing-library/user-event';
import { waitFor, fireEvent } from '@testing-library/dom';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Timer', () => {
  it('should render the timer role', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByRole('timer')).toBeInTheDocument();
  });

  it('should display all time parts', () => {
    const { container } = render(ComponentUnderTest, {});
    const items = container.querySelectorAll('[data-part="item"]');
    expect(items.length).toBe(4);
  });

  it('should show Start and hide Pause, Resume, Reset in idle state', () => {
    render(ComponentUnderTest, {});
    expect(screen.getByText('Start')).toBeVisible();
    expect(screen.getByText('Pause')).not.toBeVisible();
    expect(screen.getByText('Resume')).not.toBeVisible();
    expect(screen.getByText('Reset')).not.toBeVisible();
  });

  it('should show initial countdown time when startMs is provided', () => {
    const { container } = render(ComponentUnderTest, { startMs: 5000, countdown: true });
    const secondsItem = container.querySelector('[data-type="seconds"]');
    expect(secondsItem).toHaveTextContent('05');
  });

  it('should show Pause and hide Start after clicking Start', async () => {
    render(ComponentUnderTest, {});
    await user.click(screen.getByText('Start'));
    await waitFor(() => {
      expect(screen.getByText('Pause')).toBeVisible();
      expect(screen.getByText('Start')).not.toBeVisible();
    });
  });

  it('should show Resume and Reset after pausing', async () => {
    render(ComponentUnderTest, {});
    await user.click(screen.getByText('Start'));
    await waitFor(() => expect(screen.getByText('Pause')).toBeVisible());
    await user.click(screen.getByText('Pause'));
    await waitFor(() => {
      expect(screen.getByText('Resume')).toBeVisible();
      expect(screen.getByText('Reset')).toBeVisible();
      expect(screen.getByText('Pause')).not.toBeVisible();
      expect(screen.getByText('Start')).not.toBeVisible();
    });
  });

  it('should return to idle after reset', async () => {
    render(ComponentUnderTest, {});
    await user.click(screen.getByText('Start'));
    await waitFor(() => expect(screen.getByText('Pause')).toBeVisible());
    await user.click(screen.getByText('Pause'));
    await waitFor(() => expect(screen.getByText('Reset')).toBeVisible());
    await user.click(screen.getByText('Reset'));
    await waitFor(() => {
      expect(screen.getByText('Start')).toBeVisible();
      expect(screen.getByText('Pause')).not.toBeVisible();
    });
  });

  it('should call onTick when timer is running', async () => {
    vi.useFakeTimers();
    const onTick = vi.fn();
    // interval:16 = one tick per RAF (each RAF advances performance.now by 16ms)
    render(ComponentUnderTest, { onTick, interval: 16 });
    fireEvent.click(screen.getByText('Start'));
    await vi.advanceTimersByTimeAsync(50);
    expect(onTick).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('should call onComplete when countdown finishes', async () => {
    vi.useFakeTimers();
    const onComplete = vi.fn();
    // interval:16, startMs:16 → 2 RAFs to complete (tick1: currentMs→0, tick2: guard passes)
    render(ComponentUnderTest, { startMs: 16, countdown: true, interval: 16, onComplete });
    fireEvent.click(screen.getByText('Start'));
    await vi.advanceTimersByTimeAsync(50);
    expect(onComplete).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('should auto-start when autoStart is true', async () => {
    render(ComponentUnderTest, { autoStart: true });
    await waitFor(() => {
      expect(screen.getByText('Pause')).toBeVisible();
      expect(screen.getByText('Start')).not.toBeVisible();
    });
  });
});
