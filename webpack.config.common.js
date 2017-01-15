var path = require('path');
var webpack = require('webpack');


const mainPath = path.join(__dirname, './src');


module.exports = {
  resolve: {
    extensions: ['', '.js'],
    alias: {
      src: mainPath,
      ui: path.join(mainPath, 'ui')
    },
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
      }
    ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file"
      }
    ]
  },

  plugins: []
};
