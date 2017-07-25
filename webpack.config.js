const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/[file].map',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: '#source-map',
  module: {
    loaders: {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
  }

};