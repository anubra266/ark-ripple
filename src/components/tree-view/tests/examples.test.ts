import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { AsyncLoading } from '../examples/async-loading.ripple';
import { Basic } from '../examples/basic.ripple';
import { CheckboxTree } from '../examples/checkbox-tree.ripple';
import { ContextMenu } from '../examples/context-menu.ripple';
import { ControlledExpanded } from '../examples/controlled-expanded.ripple';
import { ControlledSelected } from '../examples/controlled-selected.ripple';
import { DisabledNode } from '../examples/disabled-node.ripple';
import { ExpandCollapseAll } from '../examples/expand-collapse-all.ripple';
import { Filtering } from '../examples/filtering.ripple';
import { LazyMount } from '../examples/lazy-mount.ripple';
import { Links } from '../examples/links.ripple';
import { Mutation } from '../examples/mutation.ripple';
import { RenameNode } from '../examples/rename-node.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { Virtualized } from '../examples/virtualized.ripple';

describe('TreeView Examples', () => {
  describe('Basic', () => {
    it('should render the tree label', () => {
      render(Basic);
      expect(screen.getByText('Tree')).toBeVisible();
    });

    it('should render root-level leaf nodes', () => {
      render(Basic);
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'package.json' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'renovate.json' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'panda.config.ts' })).toBeVisible();
    });

    it('should render root-level branch nodes', () => {
      render(Basic);
      expect(screen.getByRole('treeitem', { name: 'node_modules' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'src' })).toBeVisible();
    });

    it('should expand src branch and show children', async () => {
      render(Basic);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => {
        expect(screen.getByText('app.tsx')).toBeVisible();
        expect(screen.getByText('index.ts')).toBeVisible();
      });
    });

    it('should expand node_modules and show children', async () => {
      render(Basic);
      fireEvent.click(screen.getByRole('button', { name: 'node_modules' }));
      await waitFor(() => {
        expect(screen.getByText('zag-js')).toBeVisible();
        expect(screen.getByText('panda')).toBeVisible();
      });
    });

    it('should expand nested branch inside node_modules', async () => {
      render(Basic);
      fireEvent.click(screen.getByRole('button', { name: 'node_modules' }));
      await waitFor(() => expect(screen.getByText('@types')).toBeVisible());

      fireEvent.click(screen.getByRole('button', { name: '@types' }));
      await waitFor(() => {
        expect(screen.getByText('react')).toBeVisible();
        expect(screen.getByText('react-dom')).toBeVisible();
      });
    });

    it('should collapse an expanded branch', async () => {
      render(Basic);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());

      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.queryByText('app.tsx')).not.toBeVisible());
    });

    it('should select a leaf node on click', async () => {
      render(Basic);
      const readme = screen.getByRole('treeitem', { name: 'README.md' });
      fireEvent.click(readme);
      await waitFor(() => expect(readme).toHaveAttribute('aria-selected', 'true'));
    });
  });

  describe('ControlledExpanded', () => {
    it('should start with node_modules expanded', () => {
      render(ControlledExpanded);
      expect(screen.getByText('zag-js')).toBeVisible();
      expect(screen.getByText('panda')).toBeVisible();
    });

    it('should expand src branch via click', async () => {
      render(ControlledExpanded);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
    });

    it('should collapse node_modules via click', async () => {
      render(ControlledExpanded);
      expect(screen.getByText('zag-js')).toBeVisible();

      fireEvent.click(screen.getByRole('button', { name: 'node_modules' }));
      await waitFor(() => expect(screen.queryByText('zag-js')).not.toBeVisible());
    });
  });

  describe('ControlledSelected', () => {
    it('should start with package.json selected', () => {
      render(ControlledSelected);
      expect(screen.getByRole('treeitem', { name: 'package.json' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });

    it('should update selected node on click', async () => {
      render(ControlledSelected);
      const readme = screen.getByRole('treeitem', { name: 'README.md' });
      fireEvent.click(readme);
      await waitFor(() => expect(readme).toHaveAttribute('aria-selected', 'true'));
    });
  });

  describe('RootProvider', () => {
    it('should render the tree via root provider', () => {
      render(RootProvider);
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
      expect(screen.getByText('Tree')).toBeVisible();
    });

    it('should display selected value output', () => {
      render(RootProvider);
      expect(screen.getByText(/selected:/)).toBeVisible();
    });

    it('should update selected output when clicking a leaf node', async () => {
      render(RootProvider);
      fireEvent.click(screen.getByRole('treeitem', { name: 'README.md' }));
      await waitFor(() => expect(screen.getByText(/readme\.md/i)).toBeVisible());
    });

    it('should expand branches', async () => {
      render(RootProvider);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
    });
  });

  describe('AsyncLoading', () => {
    it('should render initial tree with async nodes', () => {
      render(AsyncLoading);
      expect(screen.getByText('Tree')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'node_modules' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'src' })).toBeVisible();
    });

    it('should show leaf nodes immediately', () => {
      render(AsyncLoading);
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'package.json' })).toBeVisible();
    });
  });

  describe('CheckboxTree', () => {
    it('should render checkbox tree', () => {
      render(CheckboxTree);
      expect(screen.getByText('Tree')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'node_modules' })).toBeVisible();
    });

    it('should render leaf nodes in checkbox tree', () => {
      render(CheckboxTree);
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });
  });

  describe('ContextMenu', () => {
    it('should render context menu tree', () => {
      render(ContextMenu);
      expect(screen.getByText('Tree')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should render branch nodes', () => {
      render(ContextMenu);
      expect(screen.getByRole('treeitem', { name: 'node_modules' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'src' })).toBeVisible();
    });
  });

  describe('DisabledNode', () => {
    it('should render disabled nodes', () => {
      render(DisabledNode);
      expect(screen.getByText('Tree')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should expand branch nodes', async () => {
      render(DisabledNode);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
    });
  });

  describe('ExpandCollapseAll', () => {
    it('should render expand all button initially', () => {
      render(ExpandCollapseAll);
      expect(screen.getByRole('button', { name: 'Expand all' })).toBeVisible();
    });

    it('should expand all branches on click', async () => {
      render(ExpandCollapseAll);
      fireEvent.click(screen.getByRole('button', { name: 'Expand all' }));
      await waitFor(() => {
        expect(screen.getByText('app.tsx')).toBeVisible();
        expect(screen.getByText('zag-js')).toBeVisible();
      });
    });

    it('should show collapse all button after expanding', async () => {
      render(ExpandCollapseAll);
      fireEvent.click(screen.getByRole('button', { name: 'Expand all' }));
      await waitFor(() => expect(screen.getByRole('button', { name: 'Collapse all' })).toBeVisible());
    });

    it('should collapse all on collapse all click', async () => {
      render(ExpandCollapseAll);
      fireEvent.click(screen.getByRole('button', { name: 'Expand all' }));
      await waitFor(() => expect(screen.getByRole('button', { name: 'Collapse all' })).toBeVisible());

      fireEvent.click(screen.getByRole('button', { name: 'Collapse all' }));
      await waitFor(() => expect(screen.queryByText('app.tsx')).not.toBeVisible());
    });
  });

  describe('Filtering', () => {
    it('should render search input and tree', () => {
      render(Filtering);
      expect(screen.getByPlaceholderText('Search')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should filter tree nodes on input', async () => {
      render(Filtering);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.input(input, { target: { value: 'app' } });
      await waitFor(() => {
        expect(screen.queryByRole('treeitem', { name: 'README.md' })).not.toBeInTheDocument();
      });
    });

    it('should restore full tree when search is cleared', async () => {
      render(Filtering);
      const input = screen.getByPlaceholderText('Search');
      fireEvent.input(input, { target: { value: 'app' } });
      await waitFor(() => expect(screen.queryByRole('treeitem', { name: 'README.md' })).not.toBeInTheDocument());

      fireEvent.input(input, { target: { value: '' } });
      await waitFor(() => expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible());
    });
  });

  describe('LazyMount', () => {
    it('should render lazy mount tree', () => {
      render(LazyMount);
      expect(screen.getByText('Tree')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should expand branch nodes', async () => {
      render(LazyMount);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
    });
  });

  describe('Links', () => {
    it('should render docs tree', () => {
      render(Links);
      expect(screen.getByText('Docs')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should render documentation branch', () => {
      render(Links);
      expect(screen.getByRole('treeitem', { name: 'Documentation' })).toBeVisible();
    });

    it('should expand docs and show link nodes', async () => {
      render(Links);
      fireEvent.click(screen.getByRole('button', { name: 'Documentation' }));
      await waitFor(() => expect(screen.getByText('Getting Started')).toBeVisible());
    });
  });

  describe('Mutation', () => {
    it('should render mutation tree', () => {
      render(Mutation);
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'node_modules' })).toBeVisible();
    });
  });

  describe('RenameNode', () => {
    it('should render rename tree', () => {
      render(RenameNode);
      expect(screen.getByText('Tree (Press F2 to rename)')).toBeVisible();
      expect(screen.getByRole('treeitem', { name: 'README.md' })).toBeVisible();
    });

    it('should expand branch nodes', async () => {
      render(RenameNode);
      fireEvent.click(screen.getByRole('button', { name: 'src' }));
      await waitFor(() => expect(screen.getByText('app.tsx')).toBeVisible());
    });
  });

  describe('Virtualized', () => {
    it('should render virtualized tree', () => {
      render(Virtualized);
      expect(screen.getByText(/Virtualized Tree/)).toBeVisible();
    });

    it('should render expand and collapse buttons', () => {
      render(Virtualized);
      expect(screen.getByRole('button', { name: 'Collapse all' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Expand all' })).toBeVisible();
    });
  });
});
