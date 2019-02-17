module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint", // Fix: Parsing error: Unexpected token = in "static propTypes = {"
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    }
  },

  plugins: [ 'react' ],

  // https://github.com/yannickcr/eslint-plugin-react
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    }
  },

  globals: {},

  /**
  * ERROR Level: Severity should be one of the following:
  *  0 = off  |  1 = warn  |  2 = error
  */
  rules: {
    'comma-dangle': [2, {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'only-multiline'
    }],
    'eqeqeq': 'error', // require use of explicit equality comparators - "===", "!=="
    'indent': ['error', 2, { 'SwitchCase': 2 }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-var': 'error', // ES6: This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
  }

}
