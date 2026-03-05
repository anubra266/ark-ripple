import { Context, type Tracked } from 'ripple';
import type { PropTypes } from 'zag-ripple';
import type * as toast from '@zag-js/toast';

export interface UseToastContext extends toast.Api<PropTypes> {}

export const ToastApiContext = new Context<Tracked<UseToastContext>>();

export const useToastContext = (): Tracked<UseToastContext> => ToastApiContext.get();
