import { Context } from 'ripple';
import type * as menu from '@zag-js/menu';
import type { PropTypes } from 'zag-ripple';

export type UseMenuTriggerItemContext =
	| ReturnType<menu.Api<PropTypes>['getTriggerItemProps']>
	| undefined;

export const MenuTriggerItemContext = new Context<UseMenuTriggerItemContext>();

export const useMenuTriggerItemContext = (): UseMenuTriggerItemContext =>
	MenuTriggerItemContext.get();
