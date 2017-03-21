var webpack=require('webpack');

module.exports = {
  entry: './client/javascripts/index.js',
  output: {
    path: __dirname+'/public/bundle/',
    filename: 'index.js'
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
