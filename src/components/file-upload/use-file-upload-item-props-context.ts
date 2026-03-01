import type { ItemProps } from '@zag-js/file-upload';
import { Context, type Tracked } from 'ripple';

export type UseFileUploadItemContext = Tracked<ItemProps>;

export const FileUploadItemPropsContext = new Context<UseFileUploadItemContext>();

export const useFileUploadItemPropsContext = (): UseFileUploadItemContext =>
	FileUploadItemPropsContext.get();
