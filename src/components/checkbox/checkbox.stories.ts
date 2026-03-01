import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { DefaultChecked as DefaultCheckedExample } from './examples/default-checked.ripple';
import { Disabled as DisabledExample } from './examples/disabled.ripple';
import { Group as GroupExample } from './examples/group.ripple';
import { GroupControlled as GroupControlledExample } from './examples/group-controlled.ripple';
import { GroupProvider as GroupProviderExample } from './examples/group-provider.ripple';
import { GroupWithFieldset as GroupWithFieldsetExample } from './examples/group-with-fieldset.ripple';
import { GroupWithForm as GroupWithFormExample } from './examples/group-with-form.ripple';
import { GroupWithInvalid as GroupWithInvalidExample } from './examples/group-with-invalid.ripple';
import { GroupWithMaxSelected as GroupWithMaxSelectedExample } from './examples/group-with-max-selected.ripple';
import { GroupWithSelectAll as GroupWithSelectAllExample } from './examples/group-with-select-all.ripple';
import { Indeterminate as IndeterminateExample } from './examples/indeterminate.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';
import { WithForm as WithFormExample } from './examples/with-form.ripple';

const meta: Meta = {
  title: 'Components/Checkbox',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const DefaultChecked = {
  render: () => ({ Component: DefaultCheckedExample }),
};

export const Disabled = {
  render: () => ({ Component: DisabledExample }),
};

export const Group = {
  render: () => ({ Component: GroupExample }),
};

export const GroupControlled = {
  render: () => ({ Component: GroupControlledExample }),
};

export const GroupProvider = {
  render: () => ({ Component: GroupProviderExample }),
};

export const GroupWithFieldset = {
  render: () => ({ Component: GroupWithFieldsetExample }),
};

export const GroupWithForm = {
  render: () => ({ Component: GroupWithFormExample }),
};

export const GroupWithInvalid = {
  render: () => ({ Component: GroupWithInvalidExample }),
};

export const GroupWithMaxSelected = {
  render: () => ({ Component: GroupWithMaxSelectedExample }),
};

export const GroupWithSelectAll = {
  render: () => ({ Component: GroupWithSelectAllExample }),
};

export const Indeterminate = {
  render: () => ({ Component: IndeterminateExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};

export const WithForm = {
  render: () => ({ Component: WithFormExample }),
};
