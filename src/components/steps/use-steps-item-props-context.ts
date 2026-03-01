import { Context } from 'ripple';

export interface StepsItemPropsSignals {
	index: any;
}

export const StepsItemPropsContext = new Context<StepsItemPropsSignals>({ index: 0 });

export const useStepsItemPropsContext = (): StepsItemPropsSignals => StepsItemPropsContext.get();
