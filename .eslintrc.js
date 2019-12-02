module.exports = {
  plugins: ['@typescript-eslint', 'jest', 'node', 'promise', 'sonarjs', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/prefer-default-export': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'no-process-exit': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
  },
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
