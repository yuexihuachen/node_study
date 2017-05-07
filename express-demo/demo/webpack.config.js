var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/client/index.js',
  output: {
    path: __dirname+'/public/bundle/',
    filename: 'index.js'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
