module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ["react", "react-native", "react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off"
  },
  settings: { react: { version: "detect" } },
  env: {
    node: true,
    browser: true,
    "react-native/react-native": true
  }
}
