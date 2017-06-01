var path = require('path');
var webpack = require('webpack');

module.exports = {
  //entry: './public/client/index.js',
  entry:{//入口文件
    app: './public/client/index.js',//应用程序
    vendor: ['react','react-dom']//公共库
  },
  output: {//输出
    path: __dirname+'/public/bundle/',
    filename: '[name].js'
  },
   plugins: [//插件
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
    modules: [path.join(__dirname, 'node_modules')]//webpackage解析模块时应该搜索哪些目录
  },
  module: {//模块
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
