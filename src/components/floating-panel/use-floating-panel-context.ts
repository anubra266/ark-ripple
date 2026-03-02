import { Context } from 'ripple';
import type { UseFloatingPanelReturn } from './use-floating-panel.ripple';

export type UseFloatingPanelContext = UseFloatingPanelReturn;

export const FloatingPanelApiContext = new Context<UseFloatingPanelContext>();

export const useFloatingPanelContext = (): UseFloatingPanelContext => FloatingPanelApiContext.get();
