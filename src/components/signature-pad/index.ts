export type {
  DrawDetails as SignaturePadDrawDetails,
  DrawEndDetails as SignaturePadDrawEndDetails,
  DrawingOptions as SignaturePadDrawingOptions,
} from '@zag-js/signature-pad';
export {
  SignaturePadClearTrigger,
  type SignaturePadClearTriggerBaseProps,
  type SignaturePadClearTriggerProps,
} from './signature-pad-clear-trigger.ripple';
export { SignaturePadContext, type SignaturePadContextProps } from './signature-pad-context.ripple';
export {
  SignaturePadControl,
  type SignaturePadControlBaseProps,
  type SignaturePadControlProps,
} from './signature-pad-control.ripple';
export {
  SignaturePadGuide,
  type SignaturePadGuideBaseProps,
  type SignaturePadGuideProps,
} from './signature-pad-guide.ripple';
export {
  SignaturePadLabel,
  type SignaturePadLabelBaseProps,
  type SignaturePadLabelProps,
} from './signature-pad-label.ripple';
export {
  SignaturePadRoot,
  type SignaturePadRootBaseProps,
  type SignaturePadRootProps,
} from './signature-pad-root.ripple';
export {
  SignaturePadRootProvider,
  type SignaturePadRootProviderBaseProps,
  type SignaturePadRootProviderProps,
} from './signature-pad-root-provider.ripple';
export {
  SignaturePadSegment,
  type SignaturePadSegmentBaseProps,
  type SignaturePadSegmentProps,
} from './signature-pad-segment.ripple';
export { signaturePadAnatomy } from './signature-pad.anatomy';
export {
  useSignaturePad,
  type UseSignaturePadProps,
  type UseSignaturePadReturn,
} from './use-signature-pad.ripple';
export { useSignaturePadContext, type UseSignaturePadContext } from './use-signature-pad-context';
export { splitSignaturePadProps } from './split-signature-pad-props.ripple';

export * as SignaturePad from './signature-pad';
