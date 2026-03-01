import {
  GridCollection,
  type CollectionItem,
  type CollectionOptions,
  type GridCollectionOptions,
} from '@zag-js/collection';

export const createGridCollection = <T extends CollectionItem>(
  options: GridCollectionOptions<T>,
): GridCollection<T> => new GridCollection(options);

export type { GridCollection, CollectionOptions, CollectionItem, GridCollectionOptions };
