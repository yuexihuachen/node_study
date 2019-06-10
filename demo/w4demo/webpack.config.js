const path = require('path');
const fs = require('fs');

let webpackConfig= {
  mode: 'development',
  devtool: "source-map",
  entry: './public/javascripts/src/index.js',
  output: {//输出
    path: path.resolve(__dirname,'./public/javascripts/dist/'),
    filename: 'bundle.js'
  },
  resolve: {//解析
    modules: ['node_modules']
  },
  module: {//模块
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

module.exports =webpackConfig;