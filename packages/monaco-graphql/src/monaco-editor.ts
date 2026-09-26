import 'monaco-editor/features/register.all';
import 'monaco-editor/languages/definitions/graphql/register.js';
import 'monaco-editor/languages/features/json/register.js';
import { languages } from 'monaco-editor/editor';

// Monaco loads this configuration with the tokenizer. Registering it here keeps
// editor behavior synchronous while the tokenizer stays lazy.
languages.setLanguageConfiguration('graphql', {
  comments: { lineComment: '#' },
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ],
  autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"""', close: '"""', notIn: ['string', 'comment'] },
    { open: '"', close: '"', notIn: ['string', 'comment'] },
  ],
  surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"""', close: '"""' },
    { open: '"', close: '"' },
  ],
  folding: { offSide: true },
});

export * from 'monaco-editor/editor';
