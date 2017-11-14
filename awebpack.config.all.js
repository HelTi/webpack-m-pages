const webpack = require('webpack'); // 用于访问内置插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path');
const utils = require('./config/utils')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: 'static/js/[name][hash].js',
        chunkFilename: 'static/js/[id].chunk.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                loader: "html-loader?attrs=img:src img:data-src"
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
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            //生成css文件名
            filename: 'static/css/[name].css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            chunks: ['index']
        })
    ],
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:3000,
        inline:true
    }
}