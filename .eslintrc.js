module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
    // Disable some rules that might conflict with Prettier
    "@typescript-eslint/indent": "off",
    // Allow require() in config files
    "@typescript-eslint/no-var-requires": "off",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "public/",
    ".cache/",
    "coverage/",
    "*.min.js",
    ".gatsby/",
  ],
}
