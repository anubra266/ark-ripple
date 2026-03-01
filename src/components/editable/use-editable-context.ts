import { Context } from 'ripple';
import type { UseEditableReturn } from './use-editable.ripple';

export type UseEditableContext = UseEditableReturn;

export const EditableApiContext = new Context<UseEditableContext>();

export const useEditableContext = (): UseEditableContext => EditableApiContext.get();
