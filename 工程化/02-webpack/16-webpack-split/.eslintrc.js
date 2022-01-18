module.exports = {
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
    // 'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'spaced-comment': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'error',
    // to enforce using type for object type definitions, can be type or interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type']
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  }
}
