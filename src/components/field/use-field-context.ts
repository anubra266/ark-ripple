import { Context } from 'ripple';
import type { UseFieldReturn } from './use-field.ripple';

export type UseFieldContext = UseFieldReturn;

export const FieldApiContext = new Context<UseFieldContext | undefined>(undefined);

export const useFieldContext = (): UseFieldContext | undefined => FieldApiContext.get();
