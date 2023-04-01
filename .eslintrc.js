module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:css-modules/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'css-modules'],
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'error',
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/no-unknown-property': 'warn',
    },
}
