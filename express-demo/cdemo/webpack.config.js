var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry:{//入口文件
    app: './public/client/index.js',//应用程序
    vendor: ['react','react-lite']//公共库
  },
  output: {//输出
    path: __dirname+'/public/bundle/',
    filename: '[name].js'
  },
   plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,//压缩文件
    //     drop_console: false,
    //   },
    //   comments:false,//去掉注释
    //   sourceMap: true
    // }),
     //new webpack.HotModuleReplacementPlugin(),// webpack-dev-server 强化插件
     new webpack.optimize.CommonsChunkPlugin({  // 构建优化插件
       names:["vendor"],
       minChunks: Infinity
     })
  ],
  resolve: {//解析
    extensions: ['.ts', '.js', '.json'],//自动解析确定的扩展
    alias: {//别名,一个请求重定向到另一个路径
            'react': 'react-lite',
            'react-dom': 'react-lite'
    },
    modules: [path.join(__dirname, 'node_modules')]//webpackage解析模块时的目录
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
