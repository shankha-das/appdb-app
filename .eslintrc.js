module.exports = {
  extends: '@domoapps/eslint-config',
  ignorePatterns: ['setupProxy.js', 'react-app-env.d.ts'],
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
};
