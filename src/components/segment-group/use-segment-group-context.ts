import { Context } from 'ripple';
import type { UseSegmentGroupReturn } from './use-segment-group.ripple';

export type UseSegmentGroupContext = UseSegmentGroupReturn;

export const SegmentGroupApiContext = new Context<UseSegmentGroupContext>();

export const useSegmentGroupContext = (): UseSegmentGroupContext => SegmentGroupApiContext.get();
