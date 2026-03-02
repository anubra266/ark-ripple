import { Context } from 'ripple';
import type { UseHoverCardReturn } from './use-hover-card.ripple';

export type UseHoverCardContext = UseHoverCardReturn;

export const HoverCardApiContext = new Context<UseHoverCardContext>();

export const useHoverCardContext = (): UseHoverCardContext =>
  HoverCardApiContext.get();
