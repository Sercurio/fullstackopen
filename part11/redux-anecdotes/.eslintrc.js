module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  globals: {
    cy: false,
    Cypress: false,
    describe: false,
    context: false,
    beforeEach: false,
    afterEach: false,
    it: false,
    assert: false,
    expect: false,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'error',
    'react/prop-types': 0,
  },
}
