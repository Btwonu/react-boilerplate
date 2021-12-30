const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        postcssOptions: {
          plugins: () => [postcssNormalize()],
        },
      },
    ],
  ],
};
