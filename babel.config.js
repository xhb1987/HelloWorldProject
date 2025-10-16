module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@component': './src/component',
          '@screen': './src/screen',
          '@state': './src/state',
          '@util': './src/util',
          '@asset': './src/asset',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
