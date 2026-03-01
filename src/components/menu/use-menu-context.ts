import { Context } from 'ripple';
import type * as menu from '@zag-js/menu';
import type { PropTypes } from 'zag-ripple';

export type UseMenuContext = menu.Api<PropTypes>;

export const MenuApiContext = new Context<UseMenuContext>();

export const useMenuContext = (): UseMenuContext => MenuApiContext.get();
