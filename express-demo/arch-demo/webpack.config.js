var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  //entry: './public/client/index.js',
  entry: {//入口文件
    app: './public/client/index.js',//应用程序
    vendor: ['react', 'react-lite', 'react-redux', 'redux']//公共库
  },
  output: {//输出
    path: __dirname + '/public/bundle/',
    filename: '[name].js'
  },
  devtool: 'nline-source-map',
  plugins: [//插件
    new webpack.DefinePlugin({ // 编译时(compile time)插件
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,//警告
        drop_console: false,
      },
      minimize:true,
      comments: false,//去掉注释
      sourceMap: false
    }),
    new webpack.HotModuleReplacementPlugin(),// webpack-dev-server 强化插件
    new webpack.optimize.CommonsChunkPlugin({  // 构建优化插件
      names: ["vendor"],
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
  module: {//模块
    loaders: [//加载器loader是对应用程序中资源文件进行转换
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
