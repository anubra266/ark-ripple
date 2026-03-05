import { render, within, fireEvent, waitFor } from '../../../test-utils';
import { Basic } from '../examples/basic.ripple';
import { Collapsible } from '../examples/collapsible.ripple';
import { Context } from '../examples/context.ripple';
import { MultiplePanels } from '../examples/multiple-panels.ripple';
import { ResizeIndicator } from '../examples/resize-indicator.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { Vertical } from '../examples/vertical.ripple';

describe('Splitter Examples', () => {
  describe('Basic', () => {
    it('should render panels A and B', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByText('A')).toBeInTheDocument();
      expect(await within(container).findByText('B')).toBeInTheDocument();
    });

    it('should render resize trigger', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByRole('separator')).toBeInTheDocument();
    });
  });

  describe('Collapsible', () => {
    it('should render panels A and B', async () => {
      const { container } = render(Collapsible);
      expect(await within(container).findByText('A')).toBeInTheDocument();
      expect(await within(container).findByText('B')).toBeInTheDocument();
    });
  });

  describe('Context', () => {
    it('should render Set to 10% buttons', async () => {
      const { container } = render(Context);
      const buttons = await within(container).findAllByRole('button', { name: 'Set to 10%' });
      expect(buttons.length).toBe(2);
    });

    it('should resize panel when button is clicked', async () => {
      const { container } = render(Context);
      const buttons = await within(container).findAllByRole('button', { name: 'Set to 10%' });
      fireEvent.click(buttons[0]);
      await waitFor(() => {
        expect(container.querySelector('[data-part="root"]')).toBeInTheDocument();
      });
    });
  });

  describe('MultiplePanels', () => {
    it('should render three panels', async () => {
      const { container } = render(MultiplePanels);
      expect(await within(container).findByText('A')).toBeInTheDocument();
      expect(await within(container).findByText('B')).toBeInTheDocument();
      expect(await within(container).findByText('C')).toBeInTheDocument();
    });

    it('should render two resize triggers', async () => {
      const { container } = render(MultiplePanels);
      await within(container).findByText('C');
      const triggers = container.querySelectorAll('[data-part="resize-trigger"]');
      expect(triggers.length).toBe(2);
    });
  });

  describe('ResizeIndicator', () => {
    it('should render resize trigger indicator', async () => {
      const { container } = render(ResizeIndicator);
      await within(container).findByRole('separator');
      expect(container.querySelector('[data-part="resize-trigger-indicator"]')).toBeInTheDocument();
    });
  });

  describe('RootProvider', () => {
    it('should render panels and show output', async () => {
      const { container } = render(RootProvider);
      expect(await within(container).findByText('A')).toBeInTheDocument();
      expect(await within(container).findByText('B')).toBeInTheDocument();
      expect(container.querySelector('output')).toBeInTheDocument();
    });
  });

  describe('Vertical', () => {
    it('should render with vertical orientation', async () => {
      const { container } = render(Vertical);
      await within(container).findByText('A');
      const root = container.querySelector('[data-part="root"]');
      expect(root).toHaveAttribute('data-orientation', 'vertical');
    });
  });
});
