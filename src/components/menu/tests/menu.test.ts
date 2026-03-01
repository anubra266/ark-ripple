import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Menu', () => {
  it('should set correct aria attributes on disabled MenuItems', () => {
    render(ComponentUnderTest, { open: true });

    expect(screen.getByText('Dialog')).toHaveAttribute('aria-disabled', 'true');
  });

  it('should not fire onValueChange on disabled MenuItems', async () => {
    const onValueChange = vi.fn();

    render(ComponentUnderTest, { open: true, onValueChange });

    fireEvent.click(screen.getByText(/svelte/i));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('should apply correct role to MenuItemGroup', async () => {
    render(ComponentUnderTest);

    const button = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(button);

    await waitFor(() => expect(screen.getAllByRole('group')).toHaveLength(2));
  });

  it('should control the open state', async () => {
    render(ComponentUnderTest, { open: true });

    const text = await screen.findByText('JS Frameworks');
    expect(text).toBeVisible();
  });

  it('should be able to lazy mount', async () => {
    render(ComponentUnderTest, { lazyMount: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    const trigger = screen.getByRole('button', { name: /open menu/i });

    fireEvent.click(trigger);
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    fireEvent.click(trigger);
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());
  });

  it('should not have aria-controls if lazy mounted', async () => {
    render(ComponentUnderTest, { lazyMount: true });

    expect(screen.getByRole('button', { name: /open menu/i })).not.toHaveAttribute('aria-controls');
  });

  it('should lazy mount and unmount on exit', async () => {
    render(ComponentUnderTest, { lazyMount: true, unmountOnExit: true });

    expect(screen.queryByTestId('positioner')).not.toBeInTheDocument();

    const trigger = screen.getByRole('button', { name: /open menu/i });

    fireEvent.click(trigger);
    await waitFor(() => expect(screen.getByTestId('positioner')).toBeInTheDocument());

    fireEvent.click(trigger);
    await waitFor(() => expect(screen.queryByTestId('positioner')).not.toBeInTheDocument());
  });

  it('should open on context menu', async () => {
    render(ComponentUnderTest, { contextMenu: true });

    const contextTrigger = screen.getByText(/Open Context Menu/i);

    fireEvent.contextMenu(contextTrigger);
    await waitFor(() => expect(screen.getByText(/Ark UI/i)).toBeVisible());
  });

  it('should open nested menu', async () => {
    render(ComponentUnderTest);

    const button = screen.getByRole('button', { name: /open menu/i });

    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText(/Ark UI/i)).toBeVisible());

    fireEvent.click(screen.getByText(/CSS Frameworks/i));
    await waitFor(() => expect(screen.getByText(/Panda/i)).toBeVisible());
  });

  it('should select a radio option', async () => {
    render(ComponentUnderTest);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);
    await waitFor(() => expect(screen.getByText(/JS Frameworks/i)).toBeVisible());

    const radioButton = screen.getByRole('menuitemradio', { name: /react/i });
    fireEvent.click(radioButton);

    await waitFor(() => expect(radioButton).toHaveAttribute('aria-checked', 'true'));
  });

  it('should update selected radio item when another is clicked', async () => {
    render(ComponentUnderTest);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);
    await waitFor(() => expect(screen.getByText(/JS Frameworks/i)).toBeVisible());

    const reactRadio = screen.getByRole('menuitemradio', { name: /react/i });
    const solidRadio = screen.getByRole('menuitemradio', { name: /solid/i });

    expect(reactRadio).toHaveAttribute('aria-checked', 'true');
    expect(solidRadio).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(solidRadio);

    await waitFor(() => {
      expect(solidRadio).toHaveAttribute('aria-checked', 'true');
      expect(reactRadio).toHaveAttribute('aria-checked', 'false');
    });
  });
});
