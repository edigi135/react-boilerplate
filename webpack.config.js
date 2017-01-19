'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './browser/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  node: {
    fs: 'empty'
  },
  context: __dirname,
  devtool: 'source-map',  
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'chord-dictionary'),
        loader: 'json',
      },
    ]
  }
};
