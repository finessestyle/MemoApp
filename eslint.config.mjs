import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.browser
      }
    },

    plugins: {
      react,
      "react-hooks": reactHooks
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,

      semi: ["error", "never"],
      "comma-dangle": ["error", "never"],

      "react/react-in-jsx-scope": "off"
    }
  }
]
