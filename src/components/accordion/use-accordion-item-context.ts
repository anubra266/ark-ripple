import type { ItemState } from '@zag-js/accordion';
import { Context } from 'ripple';

export type UseAccordionItemContext = ItemState;

export const AccordionItemApiContext = new Context<UseAccordionItemContext>({
	expanded: false,
	focused: false,
	disabled: false,
});

export const useAccordionItemContext = (): UseAccordionItemContext => AccordionItemApiContext.get();
