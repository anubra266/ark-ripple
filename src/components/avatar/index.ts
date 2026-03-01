export type { StatusChangeDetails as AvatarStatusChangeDetails } from '@zag-js/avatar';
export { AvatarContext, type AvatarContextProps } from './avatar-context.ripple';
export {
	AvatarFallback,
	type AvatarFallbackBaseProps,
	type AvatarFallbackProps,
} from './avatar-fallback.ripple';
export {
	AvatarImage,
	type AvatarImageBaseProps,
	type AvatarImageProps,
} from './avatar-image.ripple';
export { AvatarRoot, type AvatarRootBaseProps, type AvatarRootProps } from './avatar-root.ripple';
export {
	AvatarRootProvider,
	type AvatarRootProviderBaseProps,
	type AvatarRootProviderProps,
} from './avatar-root-provider.ripple';
export { avatarAnatomy } from './avatar.anatomy';
export { useAvatar, type UseAvatarProps, type UseAvatarReturn } from './use-avatar.ripple';
export { useAvatarContext, type UseAvatarContext } from './use-avatar-context';
export { splitAvatarProps } from './split-avatar-props.ripple';

export * as Avatar from './avatar';
