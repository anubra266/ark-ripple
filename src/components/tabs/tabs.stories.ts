import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DisabledTab as DisabledTabExample } from './examples/disabled-tab.ripple';
import { Indicator as IndicatorExample } from './examples/indicator.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Links as LinksExample } from './examples/links.ripple';
import { ManualActivation as ManualActivationExample } from './examples/manual-activation.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Vertical as VerticalExample } from './examples/vertical.ripple';

const meta: Meta = {
  title: 'Components / Tabs',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const DisabledTab = {
  render: () => ({ Component: DisabledTabExample }),
};

export const Indicator = {
  render: () => ({ Component: IndicatorExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Links = {
  render: () => ({ Component: LinksExample }),
};

export const ManualActivation = {
  render: () => ({ Component: ManualActivationExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const Vertical = {
  render: () => ({ Component: VerticalExample }),
};
