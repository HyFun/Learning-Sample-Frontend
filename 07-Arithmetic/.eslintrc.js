/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-13 11:17:55
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 21:47:02
 */
const prettier = require('./.prettierrc.js')
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': ['error', prettier],
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
