import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.es2021
    }
  },

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: ["error", "never"],
      "comma-dangle": ["error", "never"]
    }
  }
]
