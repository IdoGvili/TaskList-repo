/* eslint-env node */

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
    plugins: ['react', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        indent: ['error', 4, { SwitchCase: 1 }],

        'no-multiple-empty-lines': 'error',
    },
};
