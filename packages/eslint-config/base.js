/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  env: {
    node: true,
    es2022: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
};
