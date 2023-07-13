module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier', 'airbnb/hooks'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@garvae/comments'],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',

    '@garvae/comments/no-line-comments': 'error',
  },
};
