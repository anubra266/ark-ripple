import { Context, type Tracked } from 'ripple';
import type { TreeNode } from '../collection'
import type { UseTreeViewReturn } from './use-tree-view.ripple';

export interface UseTreeViewContext<T extends TreeNode> extends UseTreeViewReturn<T> {}

export const TreeViewApiContext = new Context<Tracked<UseTreeViewContext<TreeNode>>>();

export const useTreeViewContext = (): Tracked<UseTreeViewContext<TreeNode>> => TreeViewApiContext.get();
