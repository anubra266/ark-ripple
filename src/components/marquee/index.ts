export type {
  PauseStatusDetails as MarqueePauseStatusDetails,
  Side as MarqueeSide,
} from '@zag-js/marquee';
export {
  MarqueeContent,
  type MarqueeContentBaseProps,
  type MarqueeContentProps,
} from './marquee-content.ripple';
export { MarqueeContext, type MarqueeContextProps } from './marquee-context.ripple';
export {
  MarqueeEdge,
  type MarqueeEdgeBaseProps,
  type MarqueeEdgeProps,
} from './marquee-edge.ripple';
export {
  MarqueeItem,
  type MarqueeItemBaseProps,
  type MarqueeItemProps,
} from './marquee-item.ripple';
export { MarqueeRoot, type MarqueeRootBaseProps, type MarqueeRootProps } from './marquee-root.ripple';
export {
  MarqueeRootProvider,
  type MarqueeRootProviderBaseProps,
  type MarqueeRootProviderProps,
} from './marquee-root-provider.ripple';
export {
  MarqueeViewport,
  type MarqueeViewportBaseProps,
  type MarqueeViewportProps,
} from './marquee-viewport.ripple';
export { marqueeAnatomy } from './marquee.anatomy';
export { useMarquee, type UseMarqueeProps, type UseMarqueeReturn } from './use-marquee.ripple';
export { useMarqueeContext, type UseMarqueeContext } from './use-marquee-context';

export * as Marquee from './marquee';
