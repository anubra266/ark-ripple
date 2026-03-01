import type { ItemState } from '@zag-js/steps';
import { Context } from 'ripple';

export type UseStepsItemContext = ItemState;

export const StepsItemApiContext = new Context<UseStepsItemContext>({
	current: false,
	completed: false,
	incomplete: false,
	invalid: false,
	first: false,
	last: false,
});

export const useStepsItemContext = (): UseStepsItemContext => StepsItemApiContext.get();
