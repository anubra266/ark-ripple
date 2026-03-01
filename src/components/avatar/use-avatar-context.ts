import { Context } from 'ripple';
import type { UseAvatarReturn } from './use-avatar.ripple';

export type UseAvatarContext = UseAvatarReturn;

export const AvatarApiContext = new Context<UseAvatarContext>();

export const useAvatarContext = (): UseAvatarContext => AvatarApiContext.get();
