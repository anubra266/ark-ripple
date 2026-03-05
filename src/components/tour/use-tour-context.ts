import { Context, type Tracked } from 'ripple';
import type { UseTourReturn } from './use-tour.ripple';

export type UseTourtContext = UseTourReturn;

export const TourApiContext = new Context<Tracked<UseTourtContext>>();

export const useTourContext = (): Tracked<UseTourtContext> => TourApiContext.get();
