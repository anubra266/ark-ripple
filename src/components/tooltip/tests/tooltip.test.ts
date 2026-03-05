import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Tooltip', () => {
  it('should show the tooltip on pointerover and close on pointer leave', async () => {
    render(ComponentUnderTest);

    const tooltipTrigger = screen.getByText('hover me');
    fireEvent.pointerOver(tooltipTrigger);

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    fireEvent.pointerLeave(tooltipTrigger);

    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });

  it('should show on pointerover if interactive is set to true', async () => {
    render(ComponentUnderTest, { interactive: true });

    const tooltipTrigger = screen.getByText('hover me');
    fireEvent.pointerOver(tooltipTrigger);

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    expect(screen.getByText('hover me')).toBeVisible();
  });

  it('should hide the tooltip when escape is pressed', async () => {
    render(ComponentUnderTest, { closeOnEscape: true });

    const tooltipTrigger = screen.getByText('hover me');
    fireEvent.pointerOver(tooltipTrigger);

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    expect(screen.getByText('content')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });

  it('should have pointer-events none style if interactive is set to false', async () => {
    render(ComponentUnderTest, { interactive: false });

    const tooltipTrigger = screen.getByText('hover me');
    fireEvent.pointerOver(tooltipTrigger);

    const tooltipContent = await waitFor(() => screen.getByText('content'));
    expect(tooltipContent).toHaveStyle({ 'pointer-events': 'none' });
  });

  it('should lazy render the tooltip', async () => {
    render(ComponentUnderTest, { lazyMount: true });
    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    render(ComponentUnderTest, { lazyMount: true, defaultOpen: true });
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeVisible());
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    const tooltipTrigger = screen.getByText('hover me');
    fireEvent.pointerOver(tooltipTrigger);

    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    fireEvent.pointerLeave(tooltipTrigger);
    await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
  });

  it('should open by default', async () => {
    render(ComponentUnderTest, { defaultOpen: true });
    await waitFor(() => expect(screen.getByText('content')).toBeVisible());
  });

  it('should invoke onOpenChange', async () => {
    const onOpenChange = vi.fn();
    render(ComponentUnderTest, { onOpenChange });

    fireEvent.pointerOver(screen.getByText('hover me'));
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith({ open: true }));
  });

  it('should be fully controlled (open)', async () => {
    render(ComponentUnderTest, { open: true });
    await waitFor(() => expect(screen.getByText('content')).toBeVisible());
  });

  it('should be fully controlled (closed)', async () => {
    render(ComponentUnderTest, { open: false });
    expect(screen.queryByText('content')).not.toBeVisible();

    fireEvent.pointerOver(screen.getByText('hover me'));
    await waitFor(() => {
      expect(screen.queryByText('content')).not.toBeVisible();
    });
  });
});
