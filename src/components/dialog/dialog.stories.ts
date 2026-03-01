import type { Meta } from '@storybook/html-vite';
import { AlertDialog as AlertDialogExample } from './examples/alert-dialog.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Confirmation as ConfirmationExample } from './examples/confirmation.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { FinalFocus as FinalFocusExample } from './examples/final-focus.ripple';
import { InitialFocus as InitialFocusExample } from './examples/initial-focus.ripple';
import { InsideScroll as InsideScrollExample } from './examples/inside-scroll.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Nested as NestedExample } from './examples/nested.ripple';
import { NonModal as NonModalExample } from './examples/non-modal.ripple';
import { OpenFromMenu as OpenFromMenuExample } from './examples/open-from-menu.ripple';
import { OutsideScroll as OutsideScrollExample } from './examples/outside-scroll.ripple';
import { RapidStateChange as RapidStateChangeExample } from './examples/rapid-state-change.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';

const meta: Meta = {
  title: 'Components/Dialog',
};

export default meta;

export const AlertDialog = {
  render: () => ({ Component: AlertDialogExample }),
};

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const Confirmation = {
  render: () => ({ Component: ConfirmationExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const FinalFocus = {
  render: () => ({ Component: FinalFocusExample }),
};

export const InitialFocus = {
  render: () => ({ Component: InitialFocusExample }),
};

export const InsideScroll = {
  render: () => ({ Component: InsideScrollExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Nested = {
  render: () => ({ Component: NestedExample }),
};

export const NonModal = {
  render: () => ({ Component: NonModalExample }),
};

export const OpenFromMenu = {
  render: () => ({ Component: OpenFromMenuExample }),
};

export const OutsideScroll = {
  render: () => ({ Component: OutsideScrollExample }),
};

export const RapidStateChange = {
  render: () => ({ Component: RapidStateChangeExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};
