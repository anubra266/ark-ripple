import { Context, type Tracked } from 'ripple';
import type { NodeProps } from '@zag-js/tree-view';

export interface UseTreeViewNodePropsContext extends NodeProps {}

export const TreeViewNodePropsContext = new Context<Tracked<UseTreeViewNodePropsContext>>();

export const useTreeViewNodePropsContext = (): Tracked<UseTreeViewNodePropsContext> => TreeViewNodePropsContext.get();
