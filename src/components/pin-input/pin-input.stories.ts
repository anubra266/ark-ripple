import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { BlurOnComplete as BlurOnCompleteExample } from './examples/blur-on-complete.ripple';
import { CustomPlaceholder as CustomPlaceholderExample } from './examples/custom-placeholder.ripple';
import { Mask as MaskExample } from './examples/mask.ripple';
import { OTPMode as OTPModeExample } from './examples/otp-mode.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components / Pin Input',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const BlurOnComplete = {
  render: () => ({ Component: BlurOnCompleteExample }),
};

export const CustomPlaceholder = {
  render: () => ({ Component: CustomPlaceholderExample }),
};

export const Mask = {
  render: () => ({ Component: MaskExample }),
};

export const OTPMode = {
  render: () => ({ Component: OTPModeExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
