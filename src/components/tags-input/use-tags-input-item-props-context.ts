import { Context } from 'ripple';
import type { ItemProps } from '@zag-js/tags-input';

export type UseTagsInputItemPropsContext = ItemProps;

export const TagsInputItemPropsApiContext = new Context<UseTagsInputItemPropsContext>();

export const useTagsInputItemPropsContext = (): UseTagsInputItemPropsContext =>
  TagsInputItemPropsApiContext.get();
