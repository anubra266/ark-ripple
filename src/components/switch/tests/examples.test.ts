import { render, within, screen, fireEvent, waitFor } from '../../../test-utils';
import { Basic } from '../examples/basic.ripple';
import { Context } from '../examples/context.ripple';
import { Controlled } from '../examples/controlled.ripple';
import { Disabled } from '../examples/disabled.ripple';
import { InitialChecked } from '../examples/initial-checked.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { WithField } from '../examples/with-field.ripple';

describe('Switch Examples', () => {
  describe('Basic', () => {
    it('should render switch with label', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByText('Label')).toBeInTheDocument();
    });

    it('should render hidden input as checkbox', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Controlled', () => {
    it('should render controlled switch', async () => {
      const { container } = render(Controlled);
      expect(await within(container).findByText('Label')).toBeInTheDocument();
    });

    it('should toggle when clicked', async () => {
      const { container } = render(Controlled);
      const checkbox = await within(container).findByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      fireEvent.click(within(container).getByText('Label'));
      await waitFor(() => expect(checkbox).toBeChecked());
    });
  });

  describe('Context', () => {
    it('should render context switch with dynamic label', async () => {
      const { container } = render(Context);
      expect(await within(container).findByText('Feature is disabled')).toBeInTheDocument();
    });

    it('should update label when toggled', async () => {
      const { container } = render(Context);
      await within(container).findByText('Feature is disabled');
      fireEvent.click(within(container).getByRole('checkbox'));
      await waitFor(() =>
        expect(within(container).getByText('Feature is enabled')).toBeInTheDocument(),
      );
    });
  });

  describe('Disabled', () => {
    it('should render disabled switch', async () => {
      const { container } = render(Disabled);
      expect(await within(container).findByRole('checkbox')).toBeDisabled();
    });
  });

  describe('InitialChecked', () => {
    it('should render switch that is initially checked', async () => {
      const { container } = render(InitialChecked);
      expect(await within(container).findByRole('checkbox')).toBeChecked();
    });
  });

  describe('RootProvider', () => {
    it('should render switch with toggle button', async () => {
      const { container } = render(RootProvider);
      expect(await within(container).findByRole('button', { name: 'Toggle' })).toBeInTheDocument();
      expect(await within(container).findByText('Label')).toBeInTheDocument();
    });

    it('should toggle switch when button is clicked', async () => {
      const { container } = render(RootProvider);
      const toggle = await within(container).findByRole('button', { name: 'Toggle' });
      const checkbox = await within(container).findByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      fireEvent.click(toggle);
      await waitFor(() => expect(checkbox).toBeChecked());
    });
  });

  describe('WithField', () => {
    it('should render switch within field with helper text', async () => {
      const { container } = render(WithField);
      expect(await within(container).findByText('Label')).toBeInTheDocument();
      expect(await within(container).findByText('Additional Info')).toBeInTheDocument();
    });
  });
});
