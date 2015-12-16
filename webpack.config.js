const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'components',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
}
