const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    host: '127.0.0.1',
    port:'8082',
    compress: true,
    inline: true,
  },
})
