module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
