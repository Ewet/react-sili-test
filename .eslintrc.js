// rules中的值0、1、2分别表示不开启检查、警告、错误。
module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'warn',
    'no-console': 'off',
    'react/prop-types': 'off', // 防止在react组件定义中缺少props验证（react/prop类型）
    'no-case-declarations': 'off', // 该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。
    'react/no-deprecated': 0,
    'no-extra-semi': 2, // 书写错误和对哪里需要使用分号的误解，会导致出现不必要的分号。
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8, //arrow functions 允许
    sourceType: 'module', //import export
    ecmaFeatures: {
      // 添加ES特性支持，使之能够识别ES6语法
      jsx: true
    },
    allowImportExportEverywhere: true
  },
  env: {
    node: true,
    es6: true,
    browser: true //fetch not defined
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'] //'React' is defined but never used 添加 'plugin:react/recommended'
};
