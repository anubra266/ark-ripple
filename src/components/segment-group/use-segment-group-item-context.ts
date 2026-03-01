import type { ItemState } from '@zag-js/radio-group';
import { Context } from 'ripple';

export type UseSegmentGroupItemContext = ItemState;

export const SegmentGroupItemApiContext = new Context<UseSegmentGroupItemContext>();

export const useSegmentGroupItemContext = (): UseSegmentGroupItemContext =>
	SegmentGroupItemApiContext.get();
