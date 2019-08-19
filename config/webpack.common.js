const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const { isDev } = require('./env')

//获取所有入口文件配置
const { entries } = require('./entrys')
// 多页html
const htmlWebpackPluginArr = require('./createHtmlWebpackPlugin')
const { htmlPages } = require('./entrys')
const pageArr = htmlPages()
//打包配置
const { publicPath } = require('../web.config')

const chunksArr = []
pageArr.forEach(page => {
  chunksArr.push(page.chunks)
})

module.exports = {
  devtool: '#source-map',
  entry: entries(),
  output: {
    filename: 'static/js/[name].js?v=[hash]',
    chunkFilename: 'static/js/[id].chunk.js',
    path: isDev
      ? path.join(__dirname, 'dist')
      : path.join(__dirname, '../dist'),
    //publicPath 上线替换真实的http,如果设置为/则需把dist下的文件放在项目的根目录
    // publicPath:'http://localhost:3000/'
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true //css压缩
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed',
                sourceMap: true
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=img:src img:data-src'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: chunksArr, //提取公用模块
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      //生成css文件名
      filename: 'static/css/[name].css?v=[hash]',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ].concat(...htmlWebpackPluginArr)
}
