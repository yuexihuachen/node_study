const path = require('path');
const fs = require('fs');
//将样式表抽离成专门的单独文件。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//提供带 Content-Encoding 编码的压缩版的资源（gzip压缩）
const CompressionPlugin = require("compression-webpack-plugin");
//js文件压缩
//const MinifyPlugin = require("babel-minify-webpack-plugin");

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
  plugins: [//插件
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: [/\.js/,/\.css/]
    })
  ],
  module: {//模块
    rules: [
      {
        test: /\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap:false,
              import:true,
              url:true,
              modules:false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: function(file){
                return file.replace(/assets\/src\//gim,'/');
              },
              publicPath: (url, resourcePath, context) => {
                return `${url.replace(/assets\/src\//gim,'/dist/')}`;
              },
              name: '[path][name].[ext]',
              context: ''
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: function(file){
                return file.replace(/assets\/src\//gim,'/');
              },
              publicPath: (url, resourcePath, context) => {
                return `${url.replace(/assets\/src\//gim,'/dist/')}`;
              },
              name(file) {
                return '[path][name].[ext]';
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }]
      },
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