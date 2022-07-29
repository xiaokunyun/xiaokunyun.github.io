module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "./.eslintrc-auto-import.json",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: "off", //["error", "always"]
    quotes: "off", // ["error", "double"],
    "vue/multi-word-component-names": "off",
    // "vue/multi-word-component-names": [
    //   "error",
    //   {
    //     ignores: ["Header", "Rotate", "Line"],
    //   },
    // ],
  },
};
