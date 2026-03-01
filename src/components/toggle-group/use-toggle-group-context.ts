import { Context } from 'ripple';
import type { UseToggleGroupReturn } from './use-toggle-group.ripple';

export type UseToggleGroupContext = UseToggleGroupReturn;

export const ToggleGroupApiContext = new Context<UseToggleGroupContext>();

export const useToggleGroupContext = (): UseToggleGroupContext => ToggleGroupApiContext.get();
