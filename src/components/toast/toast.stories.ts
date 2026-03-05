import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Action as ActionExample } from './examples/action.ripple';
import { Types as TypesExample } from './examples/types.ripple';
import { Placement as PlacementExample } from './examples/placement.ripple';
import { PromiseToast as PromiseToastExample } from './examples/promise-toast.ripple';
import { Update as UpdateExample } from './examples/update.ripple';
import { Duration as DurationExample } from './examples/duration.ripple';
import { MaxToasts as MaxToastsExample } from './examples/max-toasts.ripple';
import { VaryingHeight as VaryingHeightExample } from './examples/varying-height.ripple';

const meta: Meta = {
  title: 'Components/Toast',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Action = {
  render: () => ({ Component: ActionExample }),
};

export const Types = {
  render: () => ({ Component: TypesExample }),
};

export const Placement = {
  render: () => ({ Component: PlacementExample }),
};

export const PromiseToast = {
  render: () => ({ Component: PromiseToastExample }),
};

export const Update = {
  render: () => ({ Component: UpdateExample }),
};

export const Duration = {
  render: () => ({ Component: DurationExample }),
};

export const MaxToasts = {
  render: () => ({ Component: MaxToastsExample }),
};

export const VaryingHeight = {
  render: () => ({ Component: VaryingHeightExample }),
};
