import { Context } from 'ripple';
import type { UseRatingGroupReturn } from './use-rating-group.ripple';

export type UseRatingGroupContext = UseRatingGroupReturn;

export const RatingGroupApiContext = new Context<UseRatingGroupContext>();

export const useRatingGroupContext = (): UseRatingGroupContext => RatingGroupApiContext.get();
