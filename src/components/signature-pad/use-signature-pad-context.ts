import { Context } from 'ripple';
import type { UseSignaturePadReturn } from './use-signature-pad.ripple';

export type UseSignaturePadContext = UseSignaturePadReturn;

export const SignaturePadApiContext = new Context<UseSignaturePadContext>();

export const useSignaturePadContext = (): UseSignaturePadContext => SignaturePadApiContext.get();
