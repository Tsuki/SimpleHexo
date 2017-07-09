const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './bin/'),
    filename: 'simhex',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js.(x)?/,
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