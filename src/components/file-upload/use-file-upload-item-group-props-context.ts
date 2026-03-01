import type { ItemGroupProps } from '@zag-js/file-upload';
import { Context, type Tracked } from 'ripple';

export type UseFileUploadItemGroupContext = Tracked<ItemGroupProps>;

export const FileUploadItemGroupPropsContext = new Context<UseFileUploadItemGroupContext>(
	{} as UseFileUploadItemGroupContext,
);

export const useFileUploadItemGroupPropsContext = (): UseFileUploadItemGroupContext =>
	FileUploadItemGroupPropsContext.get();
