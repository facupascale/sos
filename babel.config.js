module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel'],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
          alias: {
            '@/*': './*',
          },
        },
      ],
    ],
  }
}
