import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * 共有の ESLint 設定
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const BaseConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
];
