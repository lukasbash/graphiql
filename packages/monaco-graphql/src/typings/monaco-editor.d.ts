/* eslint-disable @typescript-eslint/no-restricted-imports --
 * in this file is allowed to import monaco-editor
 */
declare module 'monaco-editor/editor/common/standalone/standaloneEnums.js' {
  export { MarkerSeverity } from 'monaco-editor';
}

declare module 'monaco-editor/languages/definitions/graphql/graphql.js' {
  import type { languages } from 'monaco-editor/editor';

  export const conf: languages.LanguageConfiguration;
}
