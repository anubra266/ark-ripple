import type { Meta } from '@storybook/html-vite';
import { Anchor as AnchorExample } from './examples/anchor.ripple';
import { Arrow as ArrowExample } from './examples/arrow.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { CloseBehavior as CloseBehaviorExample } from './examples/close-behavior.ripple';
import { Context as ContextExample } from './examples/context.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { DisableOutsideClick as DisableOutsideClickExample } from './examples/disable-outside-click.ripple';
import { InitialFocusEl as InitialFocusElExample } from './examples/initial-focus.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { Modal as ModalExample } from './examples/modal.ripple';
import { Nested as NestedExample } from './examples/nested.ripple';
import { Positioning as PositioningExample } from './examples/positioning.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { SameWidth as SameWidthExample } from './examples/same-width.ripple';
import { WithDialog as WithDialogExample } from './examples/with-dialog.ripple';

const meta: Meta = {
  title: 'Components/Popover',
};

export default meta;

export const Anchor = {
  render: () => ({ Component: AnchorExample }),
};

export const Arrow = {
  render: () => ({ Component: ArrowExample }),
};

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const CloseBehavior = {
  render: () => ({ Component: CloseBehaviorExample }),
};

export const Context = {
  render: () => ({ Component: ContextExample }),
};

export const Controlled = {
  render: () => ({ Component: ControlledExample }),
};

export const DisableOutsideClick = {
  render: () => ({ Component: DisableOutsideClickExample }),
};

export const InitialFocusEl = {
  render: () => ({ Component: InitialFocusElExample }),
};

export const LazyMount = {
  render: () => ({ Component: LazyMountExample }),
};

export const Modal = {
  render: () => ({ Component: ModalExample }),
};

export const Nested = {
  render: () => ({ Component: NestedExample }),
};

export const Positioning = {
  render: () => ({ Component: PositioningExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const SameWidth = {
  render: () => ({ Component: SameWidthExample }),
};

export const WithDialog = {
  render: () => ({ Component: WithDialogExample }),
};
