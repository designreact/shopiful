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
  }
}
