import { Context } from 'ripple';
import type { UseStepsReturn } from './use-steps.ripple';

export type UseStepsContext = UseStepsReturn;

export const StepsApiContext = new Context<UseStepsContext>();

export const useStepsContext = (): UseStepsContext => StepsApiContext.get();
