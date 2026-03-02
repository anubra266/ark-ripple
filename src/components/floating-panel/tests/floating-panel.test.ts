import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';
import { ControlledComponentUnderTest } from './controlled.ripple';

describe('FloatingPanel', () => {
  it('should open and close the floating panel', async () => {
    render(ComponentUnderTest);

    fireEvent.click(screen.getByRole('button', { name: 'Toggle Panel' }));
    await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: 'Close Window' }));
    await waitFor(() => {
      expect(screen.queryByText('Floating Panel')).not.toBeVisible();
    });
  });

  it('should allow controlled usage', async () => {
    render(ControlledComponentUnderTest);
    expect(screen.queryByText('Floating Panel')).not.toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    await waitFor(() => expect(screen.getByText('Floating Panel')).toBeVisible());

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    await waitFor(() => {
      expect(screen.queryByText('Floating Panel')).not.toBeVisible();
    });
  });

  it('should be able to lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Toggle Panel' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());

    fireEvent.click(screen.getByRole('button', { name: 'Close Window' }));
    expect(screen.getByTestId('positioner')).toBeInTheDocument();
  });

  it('should not have aria-controls if lazy mounted', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.getByRole('button', { name: 'Toggle Panel' })).not.toHaveAttribute(
      'aria-controls',
    );
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Toggle Panel' }));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: 'Close Window' }));
    await waitFor(() =>
      expect(screen.queryByTestId('positioner')).not.toBeInTheDocument(),
    );
  });

  it('should open by default', async () => {
    render(ComponentUnderTest, { defaultOpen: true });
    await waitFor(() => expect(screen.getByText('Floating Panel')).toBeVisible());
  });

  it('should invoke onOpenChange when floating panel is closed', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { open: true, onOpenChange });

    fireEvent.click(screen.getByRole('button', { name: 'Close Window' }));
    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('should be fully controlled (open)', async () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByRole('button', { name: 'Close Window' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Close Window' }));
    expect(screen.getByRole('button', { name: 'Close Window' })).toBeVisible();
  });

  it('should be fully controlled (closed)', async () => {
    render(ComponentUnderTest, { open: false });

    expect(screen.queryByRole('button', { name: 'Close Window' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Toggle Panel' }));
    expect(screen.queryByRole('button', { name: 'Close Window' })).not.toBeInTheDocument();
  });

  it('should render stage triggers', async () => {
    render(ComponentUnderTest, { open: true });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Minimize window' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Maximize window' })).toBeInTheDocument();
    });
  });

  it('should render resize triggers', async () => {
    render(ComponentUnderTest, { open: true });
    await waitFor(() => expect(screen.getByText('Some content')).toBeVisible());
  });
});
