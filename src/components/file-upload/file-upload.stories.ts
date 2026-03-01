import type { Meta } from '@storybook/html-vite';
import { AcceptedFileTypes as AcceptedFileTypesExample } from './examples/accepted-file-types.ripple';
import { Basic as BasicExample } from './examples/basic.ripple';
import { ClearTrigger as ClearTriggerExample } from './examples/clear-trigger.ripple';
import { DirectoryUpload as DirectoryUploadExample } from './examples/directory-upload.ripple';
import { Dropzone as DropzoneExample } from './examples/dropzone.ripple';
import { ErrorHandling as ErrorHandlingExample } from './examples/error-handling.ripple';
import { FormUsage as FormUsageExample } from './examples/form-usage.ripple';
import { InitialFiles as InitialFilesExample } from './examples/initial-files.ripple';
import { MediaCapture as MediaCaptureExample } from './examples/media-capture.ripple';
import { PastingFiles as PastingFilesExample } from './examples/pasting-files.ripple';
import { RejectedFiles as RejectedFilesExample } from './examples/rejected-files.ripple';
import { RootProvider as RootProviderExample } from './examples/root-provider.ripple';
import { TransformFiles as TransformFilesExample } from './examples/transform-files.ripple';
import { WithField as WithFieldExample } from './examples/with-field.ripple';

const meta: Meta = {
  title: 'Components/FileUpload',
};

export default meta;

export const Basic = {
  render: () => ({ Component: BasicExample }),
};

export const AcceptedFileTypes = {
  render: () => ({ Component: AcceptedFileTypesExample }),
};

export const ClearTrigger = {
  render: () => ({ Component: ClearTriggerExample }),
};

export const DirectoryUpload = {
  render: () => ({ Component: DirectoryUploadExample }),
};

export const Dropzone = {
  render: () => ({ Component: DropzoneExample }),
};

export const ErrorHandling = {
  render: () => ({ Component: ErrorHandlingExample }),
};

export const FormUsage = {
  render: () => ({ Component: FormUsageExample }),
};

export const InitialFiles = {
  render: () => ({ Component: InitialFilesExample }),
};

export const MediaCapture = {
  render: () => ({ Component: MediaCaptureExample }),
};

export const PastingFiles = {
  render: () => ({ Component: PastingFilesExample }),
};

export const RejectedFiles = {
  render: () => ({ Component: RejectedFilesExample }),
};

export const RootProvider = {
  render: () => ({ Component: RootProviderExample }),
};

export const TransformFiles = {
  render: () => ({ Component: TransformFilesExample }),
};

export const WithField = {
  render: () => ({ Component: WithFieldExample }),
};
