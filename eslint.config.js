// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import ripple from '@ripple-ts/eslint-plugin';
import storybook from 'eslint-plugin-storybook';

export default [
  { ignores: ['overrides/**', 'ark/**'] },
  ...ripple.configs.recommended,
  ...storybook.configs['flat/recommended'],
];
