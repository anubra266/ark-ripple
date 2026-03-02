import user from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';
import { ControlledComponentUnderTest } from './controlled.ripple';

describe('Popover', () => {
  it('should open and close the popover', async () => {
    render(ComponentUnderTest);

    await user.click(screen.getByText('click me'));
    await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument());

    await user.click(screen.getByText('close'));
    await waitFor(() => {
      expect(screen.queryByText('title')).not.toBeVisible();
    });
  });

  it('should focus the first focusable element', async () => {
    render(ComponentUnderTest);

    await user.click(screen.getByText('click me'));
    await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument());
  });

  it('should allow controlled usage', async () => {
    render(ControlledComponentUnderTest);
    expect(screen.queryByText('title')).not.toBeVisible();

    await user.click(screen.getByRole('button', { name: /toggle/i }));
    await waitFor(() => expect(screen.getByRole('dialog')).toBeVisible());

    await user.click(screen.getByRole('button', { name: /toggle/i }));
    await waitFor(() => {
      expect(screen.queryByText('title')).not.toBeVisible();
    });
  });

  it('should be able to lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'click me' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());

    await user.click(screen.getByRole('button', { name: 'close' }));
    expect(screen.getByTestId('positioner')).toBeInTheDocument();
  });

  it('should not have aria-controls if lazy mounted', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.getByRole('button', { name: 'click me' })).not.toHaveAttribute('aria-controls');
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'click me' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    await user.click(screen.getByRole('button', { name: 'close' }));
    await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
  });

  it('should open by default', async () => {
    render(ComponentUnderTest, { defaultOpen: true });
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('should invoke onOpenChange when popover is closed', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { open: true, onOpenChange });

    await user.click(screen.getByRole('button', { name: 'close' }));
    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('should be fully controlled (open)', async () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByRole('button', { name: 'close' })).toBeVisible();

    await user.click(screen.getByRole('button', { name: 'close' }));
    expect(screen.getByRole('button', { name: 'close' })).toBeVisible();
  });

  it('should be fully controlled (closed)', async () => {
    render(ComponentUnderTest, { open: false });

    expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'click me' }));
    expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument();
  });

  it('should render title and description', async () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });
});
