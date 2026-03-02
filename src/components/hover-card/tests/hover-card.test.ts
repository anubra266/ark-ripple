import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';
import { ControlledComponentUnderTest } from './controlled.ripple';

describe('HoverCard', () => {
  it('should open on hover and close on leave', async () => {
    render(ComponentUnderTest);

    fireEvent.pointerEnter(screen.getByText('hover me'));
    await waitFor(() => expect(screen.getByText('content')).toBeVisible());

    fireEvent.pointerLeave(screen.getByText('hover me'));
    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });

  it('should allow controlled usage', async () => {
    render(ControlledComponentUnderTest);
    expect(screen.queryByText('content')).not.toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    await waitFor(() => expect(screen.getByText('content')).toBeVisible());

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });

  it('should be able to lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.pointerEnter(screen.getByText('hover me'));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    fireEvent.pointerEnter(screen.getByText('hover me'));
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    fireEvent.pointerLeave(screen.getByText('hover me'));
    await waitFor(() =>
      expect(screen.queryByTestId('positioner')).not.toBeInTheDocument(),
    );
  });

  it('should open by default', async () => {
    render(ComponentUnderTest, { defaultOpen: true });
    await waitFor(() => expect(screen.getByText('content')).toBeVisible());
  });

  it('should invoke onOpenChange', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { onOpenChange });

    fireEvent.pointerEnter(screen.getByText('hover me'));
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith({ open: true }));
  });

  it('should be fully controlled (open)', async () => {
    render(ComponentUnderTest, { open: true });
    expect(screen.getByText('content')).toBeVisible();
  });

  it('should be fully controlled (closed)', async () => {
    render(ComponentUnderTest, { open: false });
    expect(screen.queryByText('content')).not.toBeVisible();

    fireEvent.pointerEnter(screen.getByText('hover me'));
    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });
});
