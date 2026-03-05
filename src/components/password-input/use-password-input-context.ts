import { Context } from 'ripple';
import type { UsePasswordInputReturn } from './use-password-input.ripple';

export type UsePasswordInputContext = UsePasswordInputReturn;

export const PasswordInputApiContext = new Context<UsePasswordInputContext>();

export const usePasswordInputContext = (): UsePasswordInputContext => PasswordInputApiContext.get();
