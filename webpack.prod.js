// webpack.prod.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false, // disable 'source-map'
  output: {
    filename: 'pls-dropdown.js', // disable cache busting
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Dropdown',
      type: 'umd', // Ensures compatibility with different module systems
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
