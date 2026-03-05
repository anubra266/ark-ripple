import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { BlurBehavior as BlurBehaviorExample } from './examples/blur-behavior.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { ControlledInputValue as ControlledInputValueExample } from './examples/controlled-input-value.ripple';
import { Delimiter as DelimiterExample } from './examples/delimiter.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { DisabledEditing as DisabledEditingExample } from './examples/disabled-editing.ripple';
import { Invalid as InvalidExample } from './examples/invalid.ripple';
import { MaxTagLength as MaxTagLengthExample } from './examples/max-tag-length.ripple';
import { MaxWithOverflow as MaxWithOverflowExample } from './examples/max-with-overflow.ripple';
import { PasteBehavior as PasteBehaviorExample } from './examples/paste-behavior.ripple';
import { ProgrammaticControl as ProgrammaticControlExample } from './examples/programmatic-control.ripple';
import { Readonly as ReadonlyExample } from './examples/readonly.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Validation as ValidationExample } from './examples/validation.ripple';
import { WithCombobox as WithComboboxExample } from './examples/with-combobox.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components / Tags Input',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const BlurBehavior = {
  render: () => ({ Component: BlurBehaviorExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const ControlledInputValue = {
  render: () => ({ Component: ControlledInputValueExample }),
};

export const Delimiter = {
  render: () => ({ Component: DelimiterExample }),
};

export const Disabled = {
  render: () => ({ Component: DisabledExample }),
};

export const DisabledEditing = {
  render: () => ({ Component: DisabledEditingExample }),
};

export const Invalid = {
  render: () => ({ Component: InvalidExample }),
};

export const MaxTagLength = {
  render: () => ({ Component: MaxTagLengthExample }),
};

export const MaxWithOverflow = {
  render: () => ({ Component: MaxWithOverflowExample }),
};

export const PasteBehavior = {
  render: () => ({ Component: PasteBehaviorExample }),
};

export const ProgrammaticControl = {
  render: () => ({ Component: ProgrammaticControlExample }),
};

export const Readonly = {
  render: () => ({ Component: ReadonlyExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Validation = {
  render: () => ({ Component: ValidationExample }),
};

export const WithCombobox = {
  render: () => ({ Component: WithComboboxExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
