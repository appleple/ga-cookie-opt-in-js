const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: "production",
  entry: {
    'ga-accept-cookie': './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: "bundle",
    filename: '[name].js',
    library: 'gaAcceptCookie',
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    }]
  },
  plugins: [
    new CheckerPlugin
  ]
};