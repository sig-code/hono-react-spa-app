
import honoConfig from '../../packages/eslint-config/hono.js';
import tseslint from 'typescript-eslint';

// 基本設定をインポート
const baseConfig = honoConfig;

// TypeScriptの型情報を使用するための設定を追加
export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
