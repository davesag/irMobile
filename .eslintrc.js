// see https://github.com/facebook/react-native
// look in packages/eslint-config-react-native-community/index.js
// for the details of their rules.

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': 0, // hate trailing commas
    semi: 0, // prefer no semicolons.
    curly: [1, 'multi'] // prefer more compact code
  },
  overrides: [
    {
      files: ['**/__mocks__/*.js'],
      env: {
        jest: true,
        'jest/globals': true
      }
    }
  ]
}
