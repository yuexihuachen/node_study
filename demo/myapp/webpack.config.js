var webpack=require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: './public/javascripts/index.js',
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
