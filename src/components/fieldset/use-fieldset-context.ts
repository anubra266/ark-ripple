import { Context } from 'ripple';
import type { UseFieldsetReturn } from './use-fieldset.ripple';

export interface UseFieldsetContext extends UseFieldsetReturn {}

export const FieldsetApiContext = new Context<UseFieldsetContext | undefined>(undefined);

export const useFieldsetContext = (): UseFieldsetContext | undefined => FieldsetApiContext.get();
