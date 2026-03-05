import { Context } from 'ripple';
import type { UseSwitchReturn } from './use-switch.ripple';

export type UseSwitchContext = UseSwitchReturn;

export const SwitchApiContext = new Context<UseSwitchContext>();

export const useSwitchContext = (): UseSwitchContext => SwitchApiContext.get();
