import { Context, type Tracked } from 'ripple';
import type { UseTooltipReturn } from './use-tooltip.ripple';

export type UseTooltipContext = UseTooltipReturn;

export const TooltipApiContext = new Context<Tracked<UseTooltipContext>>();

export const useTooltipContext = (): Tracked<UseTooltipContext> => TooltipApiContext.get();
