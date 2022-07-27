module.exports = {
  // ↓默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  // ↓此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // ↓指定你想启用的环境
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // ↓扩展项
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // './.eslintrc-auto-import.json',
    // "some-other-config-you-use",
    // "prettier"
  ],
  // ↓设置解析器
  parser: "vue-eslint-parser",
  // ↓解析器选项
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  // ↓自定义规则配置
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //在rules中添加自定义规则
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error"]
  },
};
