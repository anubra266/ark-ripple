import type { JsonNodePreviewOptions } from '@zag-js/json-tree-utils';
import { Context, type Tracked } from 'ripple';

export interface JsonTreeViewOptions extends Partial<JsonNodePreviewOptions> {
  /**
   * Whether to show quotes on the keys.
   */
  quotesOnKeys?: boolean;
}

export const JsonTreeViewPropsContext = new Context<Tracked<JsonTreeViewOptions>>(
  {} as Tracked<JsonTreeViewOptions>,
);

export const useJsonTreeViewPropsContext = (): Tracked<JsonTreeViewOptions> =>
  JsonTreeViewPropsContext.get();
