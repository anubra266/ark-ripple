import { render, screen, waitFor, fireEvent } from '../../../test-utils';
import { ComponentUnderTest } from './basic.ripple';

describe('Listbox', () => {
  it('should render all available options', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      expect(screen.getByRole('option', { name: 'React' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Solid' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Vue' })).toBeInTheDocument();
    });
  });

  it('should render disabled items with appropriate attributes', async () => {
    render(ComponentUnderTest);
    await waitFor(() => {
      const svelte = screen.getByRole('option', { name: 'Svelte' });
      expect(svelte).toHaveAttribute('aria-disabled', 'true');
    });
  });

  it('should invoke onValueChange callback when an option is selected', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { onValueChange });

    await waitFor(() => expect(screen.getByRole('option', { name: 'React' })).toBeInTheDocument());
    fireEvent.click(screen.getByRole('option', { name: 'React' }));

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: ['react'] }),
      );
    });
  });

  it('should invoke onSelect callback when an option is selected', async () => {
    const onSelect = vi.fn();
    render(ComponentUnderTest, { onSelect });

    await waitFor(() => expect(screen.getByRole('option', { name: 'React' })).toBeInTheDocument());
    fireEvent.click(screen.getByRole('option', { name: 'React' }));

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ value: 'react' }));
    });
  });

  it('should mark the default selected option with aria-selected attribute', async () => {
    render(ComponentUnderTest, { defaultValue: ['react'] });
    await waitFor(() => {
      const option = screen.getByRole('option', { name: 'React' });
      expect(option).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('should allow multiple selections when selectionMode is multiple', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { defaultValue: ['react'], onValueChange, selectionMode: 'multiple' });

    await waitFor(() => expect(screen.getByRole('option', { name: 'Solid' })).toBeInTheDocument());
    fireEvent.click(screen.getByRole('option', { name: 'Solid' }));

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: ['react', 'solid'] }),
      );
    });
  });

  it('should render the content area', async () => {
    render(ComponentUnderTest);
    await waitFor(() => expect(screen.getByTestId('content')).toBeInTheDocument());
  });

  it('should render item group labels', async () => {
    render(ComponentUnderTest);
    await waitFor(() => expect(screen.getByText('JS Frameworks')).toBeInTheDocument());
  });

  it('should render the label', async () => {
    render(ComponentUnderTest);
    await waitFor(() =>
      expect(screen.getByText('Select your Framework:', { exact: false })).toBeInTheDocument(),
    );
  });

  it('should deselect when clicking a selected option in single mode', async () => {
    const onValueChange = vi.fn();
    render(ComponentUnderTest, { defaultValue: ['react'], onValueChange, deselectable: true });

    await waitFor(() => expect(screen.getByRole('option', { name: 'React' })).toBeInTheDocument());
    fireEvent.click(screen.getByRole('option', { name: 'React' }));

    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: [] }),
      );
    });
  });
});
