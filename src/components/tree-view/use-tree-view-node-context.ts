import { Context, type Tracked } from 'ripple';
import type { NodeState } from '@zag-js/tree-view';

export interface UseTreeViewNodeContext extends NodeState {}

export const TreeViewNodeStateContext = new Context<Tracked<UseTreeViewNodeContext>>();

export const useTreeViewNodeContext = (): Tracked<UseTreeViewNodeContext> => TreeViewNodeStateContext.get();
