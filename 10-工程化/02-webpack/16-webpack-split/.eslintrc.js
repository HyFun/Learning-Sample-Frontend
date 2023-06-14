module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { parser: 'typescript' }],
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
