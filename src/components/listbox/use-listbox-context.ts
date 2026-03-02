import { Context } from 'ripple';
import type { UseListboxReturn } from './use-listbox.ripple';

export type UseListboxContext = UseListboxReturn;

export const ListboxApiContext = new Context<UseListboxContext>();

export const useListboxContext = (): UseListboxContext => ListboxApiContext.get();
