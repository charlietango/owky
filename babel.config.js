module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@services': './src/services',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@store': './src/state/store',
            '@slices': './src/state/slices',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
