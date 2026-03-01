import { Context } from 'ripple';
import type { UseAccordionReturn } from './use-accordion.ripple';

export type UseAccordionContext = UseAccordionReturn;

export const AccordionApiContext = new Context<UseAccordionContext>();

export const useAccordionContext = (): UseAccordionContext => AccordionApiContext.get();
