var webpack = require('webpack');
var path = require('path');
var Promise = require('es6-promise').Promise;



var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {

  entry:SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
        {
          test: /\.js?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query:{
            presets: ['react','es2015', 'stage-2']
          }
        }
    ]
  },
  
  plugins: [
   new webpack.ProvidePlugin({
    Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
         })
  ]

};

module.exports = config;