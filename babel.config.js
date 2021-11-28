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
            '@component': './src/component',
            '@helper': './src/helper',
            '@screen': './src/screen',
            '@navigation': './src/navigation',
            '@store': './src/state/store',
            '@slice': './src/state/slice',
            '@hook': './src/hook',
            '@type': './src/state/type',
          },
        },
      ],
    ],
  };
};
