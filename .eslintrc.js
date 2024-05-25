// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { bracketSameLine: false }],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
