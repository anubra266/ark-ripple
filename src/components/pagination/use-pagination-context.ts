import { Context } from 'ripple';
import type { UsePaginationReturn } from './use-pagination.ripple';

export type UsePaginationContext = UsePaginationReturn;

export const PaginationApiContext = new Context<UsePaginationContext>();

export const usePaginationContext = (): UsePaginationContext => PaginationApiContext.get();
