import { Context } from 'ripple';
import type { UseClipboardReturn } from './use-clipboard.ripple';

export type UseClipboardContext = UseClipboardReturn;

export const ClipboardApiContext = new Context<UseClipboardContext>();

export const useClipboardContext = (): UseClipboardContext => ClipboardApiContext.get();
