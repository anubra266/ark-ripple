import { Context } from 'ripple';
import type { UsePinInputReturn } from './use-pin-input.ripple';

export type UsePinInputContext = UsePinInputReturn;

export const PinInputApiContext = new Context<UsePinInputContext>();

export const usePinInputContext = (): UsePinInputContext => PinInputApiContext.get();
