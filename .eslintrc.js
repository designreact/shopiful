const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'babel',
    'flowtype',
    'graphql',
    'jest',
    'react',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],
    'eol-last': ERROR,
    'semi': ERROR,
    'key-spacing': [ERROR, {
      afterColon: true,
      beforeColon: false,
    }],
    'object-curly-spacing': [ERROR, 'always'],
    'array-bracket-spacing': [ERROR, 'never'],
  }
}
