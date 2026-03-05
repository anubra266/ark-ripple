import { Context } from 'ripple';
import type { UseTagsInputReturn } from './use-tags-input.ripple';

export type UseTagsInputContext = UseTagsInputReturn;

export const TagsInputApiContext = new Context<UseTagsInputContext>();

export const useTagsInputContext = (): UseTagsInputContext => TagsInputApiContext.get();
