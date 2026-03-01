import type { Meta } from '@storybook/html-vite';
import { Basic as BasicExample } from './examples/basic.ripple';
import { Controlled as ControlledExample } from './examples/controlled.ripple';
import { IndentBackground as IndentBackgroundExample } from './examples/indent-background.ripple';
import { Modal as ModalExample } from './examples/modal.ripple';
import { NoDragArea as NoDragAreaExample } from './examples/no-drag-area.ripple';
import { NonDraggable as NonDraggableExample } from './examples/non-draggable.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { Scrollable as ScrollableExample } from './examples/scrollable.ripple';
import { SnapPoints as SnapPointsExample } from './examples/snap-points.ripple';
import { SwipeDirection as SwipeDirectionExample } from './examples/swipe-direction.ripple';

const meta: Meta = {
	title: 'Components/Drawer',
};

export default meta;

export const Basic = {
	render: () => ({ Component: BasicExample }),
};

export const Controlled = {
	render: () => ({ Component: ControlledExample }),
};

export const IndentBackground = {
	render: () => ({ Component: IndentBackgroundExample }),
};

export const Modal = {
	render: () => ({ Component: ModalExample }),
};

export const NoDragArea = {
	render: () => ({ Component: NoDragAreaExample }),
};

export const NonDraggable = {
	render: () => ({ Component: NonDraggableExample }),
};

export const RootProvider = {
	render: () => ({ Component: RootProviderExample }),
};

export const Scrollable = {
	render: () => ({ Component: ScrollableExample }),
};

export const SnapPoints = {
	render: () => ({ Component: SnapPointsExample }),
};

export const SwipeDirection = {
	render: () => ({ Component: SwipeDirectionExample }),
};
