import { Context } from 'ripple';
import type { UseToggleReturn } from './use-toggle.ripple';

export type UseToggleContext = UseToggleReturn;

export const ToggleApiContext = new Context<UseToggleContext>();

export const useToggleContext = (): UseToggleContext => ToggleApiContext.get();
