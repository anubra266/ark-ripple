import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Controls as ControlsExample } from './examples/controls.ripple';
import { DoubleClick as DoubleClickExample } from './examples/double-click.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithTextarea as TextareaExample } from './examples/textarea.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/Editable',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Controls = {
  render: () => ({ Component: ControlsExample }),
};

export const DoubleClick = {
  render: () => ({ Component: DoubleClickExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Textarea = {
  render: () => ({ Component: TextareaExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
