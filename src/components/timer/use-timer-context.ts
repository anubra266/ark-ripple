import { Context } from 'ripple';
import type { UseTimerReturn } from './use-timer.ripple';

export type UseTimerContext = UseTimerReturn;

export const TimerApiContext = new Context<UseTimerContext>();

export const useTimerContext = (): UseTimerContext => TimerApiContext.get();
