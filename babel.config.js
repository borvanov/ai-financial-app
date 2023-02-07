module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@shared': './src/shared',
          '@pages': './src/pages',
        },
      },
    ],
  ],
};
