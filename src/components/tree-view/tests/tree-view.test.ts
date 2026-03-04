import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { Basic } from '../examples/basic.ripple';
import { ControlledExpanded } from '../examples/controlled-expanded.ripple';
import { ControlledSelected } from '../examples/controlled-selected.ripple';
import { RootProvider } from '../examples/root-provider.ripple';

describe('TreeView', () => {
  it('should render a leaf node correctly', () => {
    render(Basic);
    expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
  });

  it('should render a branch node correctly', () => {
    render(Basic);
    expect(screen.getByRole('treeitem', { name: 'src' })).toBeVisible();
  });

  it('should expand branch node to reveal child leaf node', async () => {
    render(Basic);
    expect(screen.getByRole('treeitem', { name: 'src' })).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'src' }));

    await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
  });

  it('should collapse an expanded branch node', async () => {
    render(Basic);
    fireEvent.click(screen.getByRole('button', { name: 'src' }));
    await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());

    fireEvent.click(screen.getByRole('button', { name: 'src' }));
    await waitFor(() => expect(screen.queryByText('app.tsx')).not.toBeVisible());
  });

  it('should render controlled expanded state', () => {
    render(ControlledExpanded);
    expect(screen.getByText('zag-js')).toBeVisible();
  });

  it('should update controlled expanded state on change', async () => {
    render(ControlledExpanded);
    fireEvent.click(screen.getByRole('button', { name: 'src' }));
    await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
  });

  it('should render controlled selected state', () => {
    render(ControlledSelected);
    expect(screen.getByRole('treeitem', { name: 'package.json' })).toBeVisible();
  });

  it('should render root provider example', () => {
    render(RootProvider);
    expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
  });
});
