import type { ItemState } from '@zag-js/steps';
import { Context, type Tracked } from 'ripple';

export type UseStepsItemContext = ItemState;

export const StepsItemApiContext = new Context<Tracked<UseStepsItemContext>>();

export const useStepsItemContext = (): Tracked<UseStepsItemContext> => StepsItemApiContext.get();
