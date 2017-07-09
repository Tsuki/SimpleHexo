const path = require('path');
module.exports = {
  devtool: "source-map",
  entry: './src/index.js',
  target: "node",
  output: {
    path: path.join(__dirname, './bin/'),
    filename: 'simhex.js',
  },
  stats: {
    warnings: false
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: 'babel-loader',
        include: path.resolve(__dirname, './src/index.js'),
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
};