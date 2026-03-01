import user from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Dialog', () => {
  it('should show dialog content when opened', async () => {
    render(ComponentUnderTest);

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(await screen.findByText('Dialog Title')).toBeVisible();

    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByText('Dialog Title')).not.toBeVisible());
  });

  it('should invoke onOpenChange when dialog is closed', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { open: true, onOpenChange });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('should be able to lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Dialog' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.getByTestId('positioner')).toBeInTheDocument();
  });

  it('should not have aria-controls if lazy mounted', async () => {
    render(ComponentUnderTest, { lazyMount: true });

    expect(screen.getByRole('button', { name: 'Open Dialog' })).not.toHaveAttribute(
      'aria-controls',
    );
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Dialog' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
  });

  it('should be fully controlled (open)', async () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
  });

  it('should be fully controlled (closed)', async () => {
    render(ComponentUnderTest, { open: false });

    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('should render title and description', async () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    expect(screen.getByText('Dialog Description')).toBeInTheDocument();
  });
});
