'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口起点
  entry: {
    app: './src/index.js',
  },
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
  },
  // 解析
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
  },
  // loader
  module: {
    rules: [
      {
        loader: require.resolve('file-loader'),
        exclude:[/\.js$/,/\.jsx$/,/\.html$/,/\.json$/,/\.scss$/,/\.css$/],
        options:{
          name:'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,// 屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader',
        options:{
          plugins:[
            ['import', { libraryName: "antd", style: 'css' }],
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader'],
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}