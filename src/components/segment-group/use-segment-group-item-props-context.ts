import type { ItemProps } from '@zag-js/radio-group';
import { Context } from 'ripple';

export const SegmentGroupItemPropsContext = new Context<ItemProps>();

export const useSegmentGroupItemPropsContext = (): ItemProps => SegmentGroupItemPropsContext.get();
