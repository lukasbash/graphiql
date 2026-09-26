import 'monaco-editor/features/register.all';
import 'monaco-editor/languages/definitions/graphql/register.js';
import 'monaco-editor/languages/features/json/register.js';
import { languages } from 'monaco-editor/editor';
import { conf as graphqlLanguageConfiguration } from 'monaco-editor/languages/definitions/graphql/graphql.js';

languages.setLanguageConfiguration('graphql', graphqlLanguageConfiguration);

export * from 'monaco-editor/editor';
