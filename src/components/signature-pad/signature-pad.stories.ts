import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { ImagePreview as ImagePreviewExample } from './examples/image-preview.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/Signature Pad',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const ImagePreview = {
  render: () => ({ Component: ImagePreviewExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
