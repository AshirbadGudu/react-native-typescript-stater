module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // this line add for react-native-reanimated
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/components/core': './src/components/core',
          '~/components/containers': './src/components/containers',
          '~/components/shared': './src/components/shared',
          '~/configs': './src/configs',
          '~/constant': './src/constant',
          '~/hooks': './src/hooks',
          '~/routes': './src/routes',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/types': './src/types',
        },
      },
    ],
  ],
};
