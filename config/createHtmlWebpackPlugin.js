const HtmlWebpackPlugin = require('html-webpack-plugin')
const { htmlPages } = require('./entrys')
const { isProd } = require('./dev')

const pages = htmlPages()

let htmlWebpackPluginArr = []

pages.forEach(page => {
  htmlWebpackPluginArr.push(
    new HtmlWebpackPlugin({
      filename: isProd ? '../' + page['filename'] : page['filename'], //打包和开发的文件输出文件位置不一样
      template: page['template'],
      chuckName: page['chuckName'],
      chunks: page['chunks']
    })
  )
})

module.exports = htmlWebpackPluginArr
