import { Context } from 'ripple';
import type { UseImageCropperReturn } from './use-image-cropper.ripple';

export type UseImageCropperContext = UseImageCropperReturn;

export const ImageCropperApiContext = new Context<UseImageCropperContext>();

export const useImageCropperContext = (): UseImageCropperContext =>
  ImageCropperApiContext.get();
