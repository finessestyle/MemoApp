import js from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactNative from "eslint-plugin-react-native"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginPrettier from "eslint-plugin-prettier"
import globals from "globals"

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: pluginReact,
      "react-native": pluginReactNative,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        "react-native/react-native": true,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "semi": ["error", "never"],
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",

      // カンマの厳格チェック
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": ["error", "never"],

      // Hooks ルール
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Native ルール
      "react-native/no-inline-styles": "warn",
      "react-native/no-unused-styles": "warn",

      // Prettier の統合
      "prettier/prettier": ["error", { "trailingComma": "none", "singleQuote": true }],
    },
  }
)
