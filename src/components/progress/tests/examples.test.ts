import { render, screen, within, fireEvent, waitFor } from '../../../test-utils';
import { Basic as CircularBasic } from '../examples/circular/basic.ripple';
import { Controlled as CircularControlled } from '../examples/circular/controlled.ripple';
import { Indeterminate as CircularIndeterminate } from '../examples/circular/indeterminate.ripple';
import { InitialValue as CircularInitialValue } from '../examples/circular/initial-value.ripple';
import { MinMax as CircularMinMax } from '../examples/circular/min-max.ripple';
import { RootProvider as CircularRootProvider } from '../examples/circular/root-provider.ripple';
import { WithLabel as CircularWithLabel } from '../examples/circular/with-label.ripple';
import { Basic as LinearBasic } from '../examples/linear/basic.ripple';
import { Controlled as LinearControlled } from '../examples/linear/controlled.ripple';
import { Indeterminate as LinearIndeterminate } from '../examples/linear/indeterminate.ripple';
import { InitialValue as LinearInitialValue } from '../examples/linear/initial-value.ripple';
import { MinMax as LinearMinMax } from '../examples/linear/min-max.ripple';
import { RootProvider as LinearRootProvider } from '../examples/linear/root-provider.ripple';
import { ValueText as LinearValueText } from '../examples/linear/value-text.ripple';
import { Vertical as LinearVertical } from '../examples/linear/vertical.ripple';

describe('Progress Circular Examples', () => {
  describe('Basic', () => {
    it('should render progressbar with value', async () => {
      render(CircularBasic);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toBeInTheDocument();
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });

  describe('Controlled', () => {
    it('should render progressbar', async () => {
      render(CircularControlled);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });

  describe('Indeterminate', () => {
    it('should render in indeterminate state', async () => {
      render(CircularIndeterminate);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('data-state', 'indeterminate');
      expect(progressbar).not.toHaveAttribute('aria-valuenow');
    });
  });

  describe('InitialValue', () => {
    it('should render with initial value of 42', async () => {
      render(CircularInitialValue);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });

  describe('MinMax', () => {
    it('should render with custom min and max', async () => {
      render(CircularMinMax);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '20');
      expect(progressbar).toHaveAttribute('aria-valuemin', '10');
      expect(progressbar).toHaveAttribute('aria-valuemax', '30');
    });
  });

  describe('RootProvider', () => {
    it('should render with Set to Max button', async () => {
      render(CircularRootProvider);
      const button = await screen.findByRole('button', { name: 'Set to Max' });
      expect(button).toBeInTheDocument();
    });

    it('should set progress to max when button is clicked', async () => {
      render(CircularRootProvider);
      const button = await screen.findByRole('button', { name: 'Set to Max' });
      fireEvent.click(button);
      await waitFor(() => {
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar).toHaveAttribute('aria-valuenow', '100');
      });
    });
  });

  describe('WithLabel', () => {
    it('should render with label text', async () => {
      render(CircularWithLabel);
      expect(await screen.findByText('Label')).toBeInTheDocument();
    });

    it('should render progressbar', async () => {
      render(CircularWithLabel);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });
});

describe('Progress Linear Examples', () => {
  describe('Basic', () => {
    it('should render progressbar with label and value', async () => {
      render(LinearBasic);
      expect(await screen.findByText('Label')).toBeInTheDocument();
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });

  describe('Controlled', () => {
    it('should render progressbar with controlled value', async () => {
      render(LinearControlled);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '42');
    });
  });

  describe('Indeterminate', () => {
    it('should render in indeterminate state', async () => {
      render(LinearIndeterminate);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('data-state', 'indeterminate');
    });
  });

  describe('InitialValue', () => {
    it('should render with initial value of 70', async () => {
      render(LinearInitialValue);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '70');
    });
  });

  describe('MinMax', () => {
    it('should render with custom min and max', async () => {
      render(LinearMinMax);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '20');
      expect(progressbar).toHaveAttribute('aria-valuemin', '10');
      expect(progressbar).toHaveAttribute('aria-valuemax', '30');
    });
  });

  describe('RootProvider', () => {
    it('should render with Set to Max button', async () => {
      render(LinearRootProvider);
      const button = await screen.findByRole('button', { name: 'Set to Max' });
      expect(button).toBeInTheDocument();
    });

    it('should set progress to max when button is clicked', async () => {
      render(LinearRootProvider);
      const button = await screen.findByRole('button', { name: 'Set to Max' });
      fireEvent.click(button);
      await waitFor(() => {
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar).toHaveAttribute('aria-valuenow', '100');
      });
    });
  });

  describe('ValueText', () => {
    it('should apply custom translation as aria-label on the progressbar', async () => {
      const { container } = render(LinearValueText);
      const progressbars = await within(container).findAllByRole('progressbar');
      expect(progressbars[0]).toHaveAttribute('aria-label', '50 of 100 items loaded');
    });
  });

  describe('Vertical', () => {
    it('should render with vertical orientation', async () => {
      render(LinearVertical);
      const progressbar = await screen.findByRole('progressbar');
      expect(progressbar).toHaveAttribute('data-orientation', 'vertical');
    });
  });
});
