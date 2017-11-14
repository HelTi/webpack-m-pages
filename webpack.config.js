const webpack = require('webpack'); // 用于访问内置插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path');
const utils = require('./config/utils')

//获取所有入口文件
const getEntrys = require('./getEntrys')();

const entry_files = require('./config/entry.config');
console.log(entry_files)
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    devtool: '#source-map',
    entry: getEntrys,
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
    plugins: require('./config/base.plugin'),
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 3000,
        inline: true
    }
}