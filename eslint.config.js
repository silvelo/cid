import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 1,
      'brace-style': 2
    },
    ignores: ['commitlint.config.js', 'node_modules/*']
  }
];
