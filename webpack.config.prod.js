var path = require('path');
var webpack = require('webpack');

var commonConfig = require('./webpack.config.common');


const srcPath = path.join(__dirname, './src');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './'
  },

  plugins: commonConfig.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]),

  resolve: commonConfig.resolve,

  module: {
    preLoaders: commonConfig.module.preLoaders,

    loaders: commonConfig.module.loaders.concat({
      test: /\.less$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'less'
      ]
    })
  }
};
