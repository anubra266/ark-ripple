import { fireEvent, render, screen, waitFor } from '../../../test-utils';
import { ArrayData } from '../examples/array-data.ripple';
import { Basic } from '../examples/basic.ripple';
import { ExpandLevel } from '../examples/expand-level.ripple';
import { Functions } from '../examples/functions.ripple';
import { MapAndSet } from '../examples/map-and-set.ripple';
import { Regex } from '../examples/regex.ripple';
import { RenderValue } from '../examples/render-value.ripple';
import { RootProvider } from '../examples/root-provider.ripple';

// Returns true if any element is visible actual content (not in a branch-control header, not hidden).
function hasVisibleNonPreviewMatch(elements: HTMLElement[]) {
  return elements.some(
    (el) => !el.closest('[data-part="branch-control"]') && !el.closest('[hidden]'),
  );
}

// Returns true if any element is visible (not inside a hidden ancestor).
function anyVisible(elements: HTMLElement[]) {
  return elements.some((el) => !el.closest('[hidden]'));
}

describe('JsonTreeView Examples', () => {
  describe('Basic', () => {
    it('should render the tree', () => {
      render(Basic);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should render primitive key nodes', () => {
      render(Basic);
      expect(screen.getByText('name')).toBeVisible();
      expect(screen.getByText('age')).toBeVisible();
      expect(screen.getByText('email')).toBeVisible();
    });

    it('should render string and number values', async () => {
      render(Basic);
      // depth=1 expands root object — name/age are leaf nodes in [data-part="item"]
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/John Doe/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText('30'))).toBe(true);
      });
    });

    it('should show branch keys for arrays and objects', () => {
      render(Basic);
      expect(screen.getByText('tags')).toBeVisible();
      expect(screen.getByText('address')).toBeVisible();
    });

    it('should expand to depth 1 — top-level keys are visible', async () => {
      render(Basic);
      // depth=1 auto-expands root object; its direct keys are visible
      await waitFor(() => {
        expect(screen.getByText('name')).toBeVisible();
        expect(screen.getByText('age')).toBeVisible();
        expect(screen.getByText('tags')).toBeVisible();
        expect(screen.getByText('address')).toBeVisible();
      });
    });

    it('should expand tags and show all tag values after clicking', async () => {
      render(Basic);
      await waitFor(() => expect(screen.getByText('tags')).toBeVisible());
      fireEvent.click(screen.getByRole('button', { name: /tags/ }));
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag1/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag2/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag3/))).toBe(true);
      });
    });

    it('should expand address and show street/city values after clicking', async () => {
      render(Basic);
      await waitFor(() => expect(screen.getByText('address')).toBeVisible());
      fireEvent.click(screen.getByRole('button', { name: /address/ }));
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/123 Main St/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/Anytown/))).toBe(true);
      });
    });

    it('should collapse an expanded branch on click', async () => {
      render(Basic);
      await waitFor(() => expect(screen.getByText('address')).toBeVisible());
      const addressBtn = screen.getByRole('button', { name: /address/ });
      // expand
      fireEvent.click(addressBtn);
      await waitFor(() => expect(screen.getByText('street')).toBeVisible());
      // collapse
      fireEvent.click(addressBtn);
      await waitFor(() => {
        expect(screen.queryByText('street')).not.toBeVisible();
      });
    });

    it('should re-expand a collapsed branch on click', async () => {
      render(Basic);
      await waitFor(() => expect(screen.getByText('address')).toBeVisible());
      const addressBtn = screen.getByRole('button', { name: /address/ });
      // expand
      fireEvent.click(addressBtn);
      await waitFor(() => expect(screen.getByText('street')).toBeVisible());
      // collapse
      fireEvent.click(addressBtn);
      await waitFor(() => expect(screen.queryByText('street')).not.toBeVisible());
      // re-expand
      fireEvent.click(addressBtn);
      await waitFor(() => expect(screen.getByText('street')).toBeVisible());
    });
  });

  describe('RootProvider', () => {
    it('should render the tree via hook + RootProvider', () => {
      render(RootProvider);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should render top-level keys', async () => {
      render(RootProvider);
      await waitFor(() => {
        expect(screen.getByText('name')).toBeVisible();
        expect(screen.getByText('age')).toBeVisible();
      });
    });

    it('should expand to depth 1 — address key visible', async () => {
      render(RootProvider);
      await waitFor(() => {
        expect(screen.getByText('address')).toBeVisible();
      });
    });

    it('should expand and collapse branches', async () => {
      render(RootProvider);
      await waitFor(() => expect(screen.getByText('tags')).toBeVisible());
      const tagsBtn = screen.getByRole('button', { name: /tags/ });
      // expand tags
      fireEvent.click(tagsBtn);
      await waitFor(() =>
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag1/))).toBe(true),
      );
      // collapse tags
      fireEvent.click(tagsBtn);
      await waitFor(() =>
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag1/))).toBe(false),
      );
    });
  });

  describe('ExpandLevel', () => {
    it('should render tree expanded to depth 2', () => {
      render(ExpandLevel);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should show nested object values (depth 2)', async () => {
      render(ExpandLevel);
      // address object auto-expanded at depth 2 — its values are visible in items
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/123 Main St/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/Anytown/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/CA/))).toBe(true);
      });
    });

    it('should show all tag values (depth 2)', async () => {
      render(ExpandLevel);
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag1/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag2/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/tag3/))).toBe(true);
      });
    });
  });

  describe('ArrayData', () => {
    it('should render the tree', () => {
      render(ArrayData);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should show array branch keys', () => {
      render(ArrayData);
      expect(screen.getByText('normalArray')).toBeVisible();
      expect(screen.getByText('arrayWithNonEnumerableProperties')).toBeVisible();
      expect(screen.getByText('sparseArray')).toBeVisible();
    });

    it('should expand normalArray and show items', async () => {
      render(ArrayData);
      await waitFor(() => expect(screen.getByText('normalArray')).toBeVisible());
      fireEvent.click(screen.getByRole('button', { name: /normalArray/ }));
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText('1'))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText('2'))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText('3'))).toBe(true);
      });
    });

    it('should show sparse array with first and sixth items', async () => {
      render(ArrayData);
      await waitFor(() => expect(screen.getByText('sparseArray')).toBeVisible());
      fireEvent.click(screen.getByRole('button', { name: /sparseArray/ }));
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/first/))).toBe(true);
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/sixth/))).toBe(true);
      });
    });
  });

  describe('Functions', () => {
    it('should render the tree', () => {
      render(Functions);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should render function values in the tree', async () => {
      render(Functions);
      // functions array expanded at depth 1; function items are branch nodes,
      // their index keys (0, 1, 2) are visible as branch-control buttons
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /\b0\b/ })).toBeVisible();
        expect(screen.getByRole('button', { name: /\b1\b/ })).toBeVisible();
        expect(screen.getByRole('button', { name: /\b2\b/ })).toBeVisible();
      });
    });

    it('should display function names', async () => {
      render(Functions);
      // "sum" appears in the branch-control preview of function item 0
      await waitFor(() => {
        expect(anyVisible(screen.getAllByText(/sum/))).toBe(true);
      });
    });
  });

  describe('MapAndSet', () => {
    it('should render the tree', () => {
      render(MapAndSet);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should show Map [[Entries]] when expanded at depth 1', async () => {
      render(MapAndSet);
      // Map is at depth 1 — auto-expanded; shows [[Entries]] and size children
      await waitFor(() => {
        expect(anyVisible(screen.getAllByText(/\[\[Entries\]\]/))).toBe(true);
      });
    });

    it('should show map key/value entries after expanding [[Entries]]', async () => {
      render(MapAndSet);
      await waitFor(() => expect(anyVisible(screen.getAllByText(/\[\[Entries\]\]/))).toBe(true));
      // expand [[Entries]] to reveal the entry objects
      const entriesBtns = screen.getAllByRole('button', { name: /\[\[Entries\]\]/ });
      fireEvent.click(entriesBtns[0]);
      await waitFor(() => {
        expect(anyVisible(screen.getAllByText(/ark-ui-json-tree/))).toBe(true);
        expect(anyVisible(screen.getAllByText(/MIT/))).toBe(true);
      });
    });
  });

  describe('Regex', () => {
    it('should render the tree', () => {
      render(Regex);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should render regex key names', () => {
      render(Regex);
      expect(screen.getByText('regex')).toBeVisible();
      expect(screen.getByText('case_insensitive')).toBeVisible();
    });

    it('should display regex values', async () => {
      render(Regex);
      // regex values appear in the branch-control preview for regex branch nodes
      await waitFor(() => {
        expect(anyVisible(screen.getAllByText(/a-z0-9/))).toBe(true);
      });
    });
  });

  describe('RenderValue', () => {
    it('should render the tree', () => {
      render(RenderValue);
      expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('should render email as a mailto link', async () => {
      render(RenderValue);
      await waitFor(() => {
        const emailLink = screen.getByRole('link');
        expect(emailLink).toBeInTheDocument();
        expect(emailLink).toHaveAttribute('href', 'mailto:john.doe@example.com');
      });
    });

    it('should render non-email string values as plain text', async () => {
      render(RenderValue);
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText(/John Doe/))).toBe(true);
      });
    });

    it('should render number values', async () => {
      render(RenderValue);
      await waitFor(() => {
        expect(hasVisibleNonPreviewMatch(screen.getAllByText('30'))).toBe(true);
      });
    });
  });
});
