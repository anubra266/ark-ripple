import { render, screen, fireEvent, waitFor } from '../../../test-utils';
import user from '@testing-library/user-event';
import { Basic } from '../examples/basic.ripple';
import { BlurOnComplete } from '../examples/blur-on-complete.ripple';
import { CustomPlaceholder } from '../examples/custom-placeholder.ripple';
import { Mask } from '../examples/mask.ripple';
import { OTPMode } from '../examples/otp-mode.ripple';
import { RootProvider } from '../examples/root-provider.ripple';
import { WithField } from '../examples/with-field.ripple';

describe('PinInput Examples', () => {
  describe('Basic', () => {
    it('should render and accept input', async () => {
      render(Basic);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs).toHaveLength(3);

      await user.type(inputs[0], '1');
      await waitFor(() => {
        expect(inputs[0]).toHaveValue('1');
        expect(inputs[1]).toHaveFocus();
      });
    });
  });

  describe('BlurOnComplete', () => {
    it('should render with blurOnComplete', async () => {
      render(BlurOnComplete);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs).toHaveLength(3);
    });
  });

  describe('CustomPlaceholder', () => {
    it('should render with custom placeholder', async () => {
      render(CustomPlaceholder);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs).toHaveLength(3);
      expect(inputs[0]).toHaveAttribute('placeholder', '*');
    });
  });

  describe('Mask', () => {
    it('should render with mask mode', async () => {
      render(Mask);
      const inputs = await screen.findAllByLabelText(/pin code/);
      expect(inputs).toHaveLength(3);
      expect(inputs[0]).toHaveAttribute('type', 'password');
    });
  });

  describe('OTPMode', () => {
    it('should render with OTP autocomplete', async () => {
      render(OTPMode);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs).toHaveLength(3);
      expect(inputs[0]).toHaveAttribute('autocomplete', 'one-time-code');
    });
  });

  describe('RootProvider', () => {
    it('should render with focus button', async () => {
      render(RootProvider);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs).toHaveLength(3);

      const focusButton = screen.getByRole('button', { name: 'Focus' });
      expect(focusButton).toBeInTheDocument();
    });
  });

  describe('WithField', () => {
    it('should render with field helper text', async () => {
      render(WithField);
      const inputs = await screen.findAllByRole('textbox');
      expect(inputs.length).toBeGreaterThanOrEqual(3);
      expect(screen.getByText('Additional Info')).toBeInTheDocument();
    });
  });
});
