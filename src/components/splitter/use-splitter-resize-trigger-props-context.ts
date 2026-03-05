import { Context, type Tracked } from 'ripple';
import type { ResizeTriggerProps } from '@zag-js/splitter';

export type UseSplitterResizeTriggerPropsContext = Tracked<ResizeTriggerProps>;

export const SplitterResizeTriggerPropsContext =
  new Context<UseSplitterResizeTriggerPropsContext>();

export const useSplitterResizeTriggerPropsContext = (): UseSplitterResizeTriggerPropsContext =>
  SplitterResizeTriggerPropsContext.get();
