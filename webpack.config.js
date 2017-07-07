module.exports = {
  entry: './src/index.js',
  output: {
    path: './build/',
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './src/index.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
};