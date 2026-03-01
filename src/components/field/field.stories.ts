import type { Meta } from '@storybook/html-vite';
import { CustomControl as CustomControlExample } from './examples/custom-control.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Input as InputExample } from './examples/input.ripple';
import { Invalid as InvalidExample } from './examples/invalid.ripple';
import { RequiredIndicator as RequiredIndicatorExample } from './examples/required-indicator.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Select as SelectExample } from './examples/select.ripple';
import { ShadowDom as ShadowDomExample } from './examples/shadow-dom.ripple';
import { Textarea as TextareaExample } from './examples/textarea.ripple';
import { TextareaAutoresize as TextareaAutoresizeExample } from './examples/textarea-autoresize.ripple';

const meta: Meta = {
  title: 'Components/Field',
};

export default meta;

export const CustomControl = {
  render: () => ({ Component: CustomControlExample }),
};

export const Disabled = {
  render: () => ({ Component: DisabledExample }),
};

export const Input = {
  render: () => ({ Component: InputExample }),
};

export const Invalid = {
  render: () => ({ Component: InvalidExample }),
};

export const RequiredIndicator = {
  render: () => ({ Component: RequiredIndicatorExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Select = {
  render: () => ({ Component: SelectExample }),
};

export const ShadowDom = {
  render: () => ({ Component: ShadowDomExample }),
};

export const Textarea = {
  render: () => ({ Component: TextareaExample }),
};

export const TextareaAutoresize = {
  render: () => ({ Component: TextareaAutoresizeExample }),
};
