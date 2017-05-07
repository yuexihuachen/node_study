var path = require('path');
var webpack = require('webpack');

module.exports = {
  //entry: './public/client/index.js',
  entry:{
    app: './public/client/index.js',
    vendor: ['react','react-dom']
  },
  output: {
    path: __dirname+'/public/bundle/',
    filename: '[name].js'
  },
   plugins: [
     new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,//压缩文件
        drop_console: false,
      },
      comments:false,//去掉注释
      sourceMap: true
    }),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
       names:["vendor"],
       minChunks: Infinity
     })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'node_modules')]
  },
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
