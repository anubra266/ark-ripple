import { Context } from 'ripple';
import type { UsePopoverReturn } from './use-popover.ripple';

export type UsePopoverContext = UsePopoverReturn;

export const PopoverApiContext = new Context<UsePopoverContext>();

export const usePopoverContext = (): UsePopoverContext => PopoverApiContext.get();
