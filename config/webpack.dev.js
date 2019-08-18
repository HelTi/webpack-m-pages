const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common')
const { port } = require('../web.config')

module.exports = merge(common, {
  plugins: [new FriendlyErrorsWebpackPlugin()],
  devServer: {
    contentBase: './',
    host: 'localhost',
    compress: true,
    port: port,
    inline: true,
    quiet: true,
    open: true
  }
})
