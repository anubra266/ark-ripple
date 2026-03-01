export type {
	ScrollToDetails as ScrollAreaScrollToDetails,
	ScrollToEdgeDetails as ScrollAreaScrollToEdgeDetails,
} from '@zag-js/scroll-area';
export { ScrollAreaContext, type ScrollAreaContextProps } from './scroll-area-context.ripple';
export {
	ScrollAreaContent,
	type ScrollAreaContentBaseProps,
	type ScrollAreaContentProps,
} from './scroll-area-content.ripple';
export {
	ScrollAreaCorner,
	type ScrollAreaCornerBaseProps,
	type ScrollAreaCornerProps,
} from './scroll-area-corner.ripple';
export {
	ScrollAreaRoot,
	type ScrollAreaRootBaseProps,
	type ScrollAreaRootProps,
} from './scroll-area-root.ripple';
export {
	ScrollAreaRootProvider,
	type ScrollAreaRootProviderBaseProps,
	type ScrollAreaRootProviderProps,
} from './scroll-area-root-provider.ripple';
export {
	ScrollAreaScrollbar,
	type ScrollAreaScrollbarBaseProps,
	type ScrollAreaScrollbarProps,
} from './scroll-area-scrollbar.ripple';
export {
	ScrollAreaThumb,
	type ScrollAreaThumbBaseProps,
	type ScrollAreaThumbProps,
} from './scroll-area-thumb.ripple';
export {
	ScrollAreaViewport,
	type ScrollAreaViewportBaseProps,
	type ScrollAreaViewportProps,
} from './scroll-area-viewport.ripple';
export { scrollAreaAnatomy } from './scroll-area.anatomy';
export {
	useScrollArea,
	type UseScrollAreaProps,
	type UseScrollAreaReturn,
} from './use-scroll-area.ripple';
export { useScrollAreaContext, type UseScrollAreaContext } from './use-scroll-area-context';
export { useScrollAreaScrollbarContext } from './use-scroll-area-scrollbar-context';
export { splitScrollAreaProps } from './split-scroll-area-props.ripple';

export * as ScrollArea from './scroll-area';
