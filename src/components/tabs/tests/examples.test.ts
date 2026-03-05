import { render, within, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { Basic } from '../examples/basic.ripple';
import { Controlled } from '../examples/controlled.ripple';
import { DisabledTab } from '../examples/disabled-tab.ripple';
import { Indicator } from '../examples/indicator.ripple';
import { LazyMount } from '../examples/lazy-mount.ripple';
import { Links } from '../examples/links.ripple';
import { ManualActivation } from '../examples/manual-activation.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { Vertical } from '../examples/vertical.ripple';

describe('Tabs Examples', () => {
  describe('Basic', () => {
    it('should render three tabs', async () => {
      const { container } = render(Basic);
      expect(await within(container).findByText('Account')).toBeInTheDocument();
      expect(await within(container).findByText('Password')).toBeInTheDocument();
      expect(await within(container).findByText('Billing')).toBeInTheDocument();
    });

    it('should show account content when account tab is clicked', async () => {
      const { container } = render(Basic);
      fireEvent.click(within(container).getByText('Account'));
      await waitFor(() =>
        expect(within(container).getByText('Make changes to your account here.')).toBeVisible(),
      );
    });
  });

  describe('Controlled', () => {
    it('should render controlled tabs', async () => {
      const { container } = render(Controlled);
      expect(await within(container).findByText('Account')).toBeInTheDocument();
    });

    it('should switch tab content when trigger is clicked', async () => {
      const { container } = render(Controlled);
      fireEvent.click(within(container).getByText('Password'));
      await waitFor(() =>
        expect(within(container).getByText('Change your password here.')).toBeVisible(),
      );
    });
  });

  describe('DisabledTab', () => {
    it('should render with disabled password tab', async () => {
      const { container } = render(DisabledTab);
      const passwordTrigger = await within(container).findByText('Password');
      expect(passwordTrigger.closest('[data-part="trigger"]')).toBeDisabled();
    });
  });

  describe('Indicator', () => {
    it('should render tabs with indicator', async () => {
      const { container } = render(Indicator);
      expect(await within(container).findByText('Account')).toBeInTheDocument();
      expect(container.querySelector('[data-part="indicator"]')).toBeInTheDocument();
    });
  });

  describe('LazyMount', () => {
    it('should not render password content initially', async () => {
      const { container } = render(LazyMount);
      await within(container).findByText('Account');
      expect(within(container).queryByText('Change your password here.')).not.toBeInTheDocument();
    });

    it('should render password content after clicking password tab', async () => {
      const { container } = render(LazyMount);
      fireEvent.click(within(container).getByText('Password'));
      await waitFor(() =>
        expect(within(container).getByText('Change your password here.')).toBeInTheDocument(),
      );
    });
  });

  describe('Links', () => {
    it('should render tab triggers as links', async () => {
      const { container } = render(Links);
      // asChild renders <a> elements with role="tab" from the tabs API
      const accountTab = await within(container).findByRole('tab', { name: 'Account' });
      expect(accountTab.tagName.toLowerCase()).toBe('a');
      expect(accountTab).toHaveAttribute('href', '#account');
    });
  });

  describe('ManualActivation', () => {
    it('should render tabs with manual activation mode', async () => {
      const { container } = render(ManualActivation);
      expect(await within(container).findByText('Account')).toBeInTheDocument();
      expect(container.querySelector('[data-part="root"]')).toBeInTheDocument();
    });
  });

  describe('RootProvider', () => {
    it('should render tabs via root provider with output', async () => {
      const { container } = render(RootProvider);
      expect(await within(container).findByText('Account')).toBeInTheDocument();
      expect(container.querySelector('output')).toBeInTheDocument();
    });

    it('should display selected value in output', async () => {
      const { container } = render(RootProvider);
      await within(container).findByText('Account');
      expect(container.querySelector('output')?.textContent).toContain('account');
    });
  });

  describe('Vertical', () => {
    it('should render with vertical orientation', async () => {
      const { container } = render(Vertical);
      await within(container).findByText('Account');
      const root = container.querySelector('[data-part="root"]');
      expect(root).toHaveAttribute('data-orientation', 'vertical');
    });
  });
});
