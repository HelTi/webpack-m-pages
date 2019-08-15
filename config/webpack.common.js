const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const { isDev } = require('./dev')

//获取所有入口文件配置
const { entries } = require('./entrys')
// 多页html
const htmlWebpackPluginArr = require('./createHtmlWebpackPlugin')
//打包配置
const { publicPath } = require('../web.config')

module.exports = {
  devtool: '#source-map',
  entry: entries(),
  output: {
    filename: 'static/js/[name][hash].js',
    chunkFilename: 'static/js/[id].chunk.js',
    path: isDev ? path.join(__dirname, 'dist') : path.join(__dirname, '../dist'),
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
    new ExtractTextPlugin({
      //生成css文件名
      filename: 'static/css/[name][hash].css',
      disable: false,
      allChunks: true
    })
  ].concat(...htmlWebpackPluginArr)
}
