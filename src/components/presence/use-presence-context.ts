import { Context } from 'ripple';
import type { UsePresenceReturn } from './use-presence.ripple';

export type UsePresenceContext = UsePresenceReturn;

export const PresenceApiContext = new Context<UsePresenceContext>();

export const usePresenceContext = (): UsePresenceContext => PresenceApiContext.get();
