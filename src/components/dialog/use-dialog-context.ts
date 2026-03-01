import { Context } from 'ripple';
import type { UseDialogReturn } from './use-dialog.ripple';

export type UseDialogContext = UseDialogReturn;

export const DialogApiContext = new Context<UseDialogContext>();

export const useDialogContext = (): UseDialogContext => DialogApiContext.get();
