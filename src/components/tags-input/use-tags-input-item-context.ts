import { Context } from 'ripple';
import type { ItemState } from '@zag-js/tags-input';

export type UseTagsInputItemContext = ItemState;

export const TagsInputItemApiContext = new Context<UseTagsInputItemContext>();

export const useTagsInputItemContext = (): UseTagsInputItemContext => TagsInputItemApiContext.get();
