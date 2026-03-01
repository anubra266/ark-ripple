import { Context } from 'ripple';

export interface AccordionItemPropsSignals {
	value: any;
	disabled?: any;
}

export const AccordionItemPropsContext = new Context<AccordionItemPropsSignals>({ value: '' });

export const useAccordionItemPropsContext = (): AccordionItemPropsSignals =>
	AccordionItemPropsContext.get();
