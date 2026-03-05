export { layout as getSplitterLayout } from '@zag-js/splitter';
export type {
  ExpandCollapseDetails,
  PanelData,
  ResizeDetails,
  ResizeEndDetails,
} from '@zag-js/splitter';
export { SplitterContext, type SplitterContextProps } from './splitter-context.ripple';
export {
  SplitterPanel,
  type SplitterPanelBaseProps,
  type SplitterPanelProps,
} from './splitter-panel.ripple';
export {
  SplitterResizeTrigger,
  type SplitterResizeTriggerBaseProps,
  type SplitterResizeTriggerProps,
} from './splitter-resize-trigger.ripple';
export {
  SplitterResizeTriggerIndicator,
  type SplitterResizeTriggerIndicatorBaseProps,
  type SplitterResizeTriggerIndicatorProps,
} from './splitter-resize-trigger-indicator.ripple';
export {
  SplitterRoot,
  type SplitterRootBaseProps,
  type SplitterRootProps,
} from './splitter-root.ripple';
export {
  SplitterRootProvider,
  type SplitterRootProviderBaseProps,
  type SplitterRootProviderProps,
} from './splitter-root-provider.ripple';
export { splitterAnatomy } from './splitter.anatomy';
export { useSplitter, type UseSplitterProps, type UseSplitterReturn } from './use-splitter.ripple';
export { useSplitterContext, type UseSplitterContext } from './use-splitter-context';

export * as Splitter from './splitter';
