const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const utils = require('./utils')

//获取所有入口文件配置
const { entries } = require('./entrys')
// 多页html
const htmlWebpackPluginArr = require('./createHtmlWebpackPlugin')

const devMode = process.env.NODE_ENV != 'production'
console.log('devMode', devMode)

module.exports = {
  entry: entries(),
  output: {
    filename: 'static/js/[name].js?v=[hash]',
    chunkFilename: 'static/js/[id].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // 可以打包后缀为sass/scss/css的文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
              // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
              publicPath: './',
              // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
              hmr: devMode, // 仅dev环境启用HMR功能
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: utils.assetsPath('img/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: utils.assetsPath('font/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static',
        ignore: ['.*'],
      },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].css?v=[hash]',
      chunkFilename: 'static/css/[id].css?v=[hash]',
    }),
    ...htmlWebpackPluginArr,
  ],
}
