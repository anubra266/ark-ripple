import { Context } from 'ripple';
import type { UseFileUploadReturn } from './use-file-upload.ripple';

export type UseFileUploadContext = UseFileUploadReturn;

export const FileUploadApiContext = new Context<UseFileUploadContext>();

export const useFileUploadContext = (): UseFileUploadContext => FileUploadApiContext.get();
