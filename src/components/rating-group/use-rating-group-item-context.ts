import type { ItemState } from '@zag-js/rating-group';
import { Context } from 'ripple';

export type UseRatingGroupItemContext = ItemState;

export const RatingGroupItemApiContext = new Context<UseRatingGroupItemContext>();

export const useRatingGroupItemContext = (): UseRatingGroupItemContext =>
  RatingGroupItemApiContext.get();
