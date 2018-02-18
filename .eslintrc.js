module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  plugins: [
    'react',
  ],

  globals: {},

  /**
  * ERROR Level: Severity should be one of the following:
  *  0 = off  |  1 = warn  |  2 = error
  */
  rules: {
    'eqeqeq': 2, // require use of explicit equality comparators - "===", "!=="
    'indent': ['error', 2, { 'SwitchCase': 2 }], // Added so gulp-eslint fixes indentation when is initialized
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-var': 'error', // ES6: This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
  }

}
