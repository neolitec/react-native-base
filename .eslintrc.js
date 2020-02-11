module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'react',
    'import',
    'prettier',
    'promise',
    '@typescript-eslint',
    'jest',
  ],
  globals: {
    __DEV__: true,
    fetch: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'sort-imports': 'off',
    'import/order': 'warn',
    'max-classes-per-file': 'warn',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',

    // TypeScript
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // React
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
    'react/prop-types': ['off', {}],
    'react/jsx-props-no-spreading': 'warn',

    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    // Import
    // FIXME
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.ts', '.tsx', '.json'],
    //   },
    // },
    // 'import/extensions': ['.ts', '.tsx', '.json'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
  },
  env: {
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['__tests__/**/*.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
