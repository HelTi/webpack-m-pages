/**
 * Created by Administrator on 2017/4/28 0028.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var utils = require('./utils')
//var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var entry_files=require('./entry.config');
var px2rem = require('postcss-px2rem');

module.exports = {
    devtool: '#source-map',
    entry: entry_files,
    output: {
        filename: 'static/js/[name][hash].js',
        chunkFilename: 'static/js/[id].chunk.js',
        path: path.join(__dirname, 'dist/'),
        //publicPath 上线替换真实的http,如果设置为/则需把dist下的文件放在项目的根目录
        //publicPath:'http://localhost:3000/'
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader', 'sass-loader']
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
                    limit:10000,
                    name:utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]')
                }
            }           
        ]
    },
    plugins: require('./base.plugin'),
    //方便开发使用，浏览器输入：http://localhost:3000访问
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:3000,
        inline:true
    }
}