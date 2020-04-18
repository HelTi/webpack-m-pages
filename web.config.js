const path = require('path')
const isDev = process.env.NODE_ENV == 'development'

module.exports = {
  publicPath: isDev ? '/' : '/',
  port: 3000, //dev模式下http端口号
  host: 'localhost',
  externals: {
    // 第三方库使用cdn减少打包体积
    jquery: 'jQuery',
    vue: 'Vue',
  },
  alias: {
    // 别名
    vue: 'vue/dist/vue.js',
    '@': path.resolve(__dirname, './src'),
  },
}
