const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname, '../')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: ROOT_PATH,
      verbose: true,
      dry: false
    }),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].css?v=[hash]',
      disable: false,
      allChunks: true
    })
  ]
})
