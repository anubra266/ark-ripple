import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { LazyMount as LazyMountExample } from './examples/lazy-mount.ripple';
import { LazyMountAndUnmountOnExit as LazyMountAndUnmountOnExitExample } from './examples/lazy-mount-and-unmount-on-exit.ripple';
import { SkipAnimationOnMount as SkipAnimationOnMountExample } from './examples/skip-animation-on-mount.ripple';
import { UnmountOnExit as UnmountOnExitExample } from './examples/unmount-on-exit.ripple';

const meta: Meta = {
	title: 'Components/Presence',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const LazyMount = {
	render: () => ({ Component: LazyMountExample }),
};

export const UnmountOnExit = {
	render: () => ({ Component: UnmountOnExitExample }),
};

export const LazyMountAndUnmountOnExit = {
	render: () => ({ Component: LazyMountAndUnmountOnExitExample }),
};

export const SkipAnimationOnMount = {
	render: () => ({ Component: SkipAnimationOnMountExample }),
};
