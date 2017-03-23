var webpack=require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    'index':'./client/javascripts/index.js',
    'users':'./client/javascripts/users.js',
    'detail':'./client/javascripts/detail.js'
  },
  output: {
    path: __dirname+'/public/bundle/',
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]
};
