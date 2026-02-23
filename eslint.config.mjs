import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactNative from "eslint-plugin-react-native"
import pluginReactHooks from "eslint-plugin-react-hooks"

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-native": pluginReactNative,
      "react-hooks": pluginReactHooks
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.node,
        ...globals.browser, // React NativeのFetch等で必要
        "react-native/react-native": true
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "never"],
      "comma-dangle": ["error", "never"],

      // 【修正箇所】"no-unassigned-vars" を削除して、正しい名前に直す
      "no-unused-vars": "warn",

      // Hooks用のルール
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
)
