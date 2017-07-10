const path = require('path');
module.exports = {
  devtool: "source-map",
  entry: './src/index.ts',
  target: "node",
  cache: true,
  output: {
    path: path.join(__dirname, './bin/'),
    filename: 'simhex.js',
  },
  stats: {
    warnings: false
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        query: {presets: ['es2015'], cacheDirectory: true}
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }]
  }
};