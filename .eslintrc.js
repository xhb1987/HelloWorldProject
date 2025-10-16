module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Disable some rules that might be too strict for this project
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
