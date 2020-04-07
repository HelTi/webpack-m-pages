const HtmlWebpackPlugin = require('html-webpack-plugin')
const { htmlPages } = require('./entrys')

const pages = htmlPages()

let htmlWebpackPluginArr = []

pages.forEach(page => {
  htmlWebpackPluginArr.push(
    new HtmlWebpackPlugin({
      filename: page['filename'],
      template: page['template'],
      chuckName: page['chuckName'],
      chunks: ['vendors', page['chunks']]
    })
  )
})

module.exports = htmlWebpackPluginArr
