/**
 * Created by Administrator on 2017/4/28 0028.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var utils = require('./utils')
//var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    devtool: '#source-map',
    entry: {
        pageA: './src/js/pageA.js',
        pageB: './src/js/pageB.js',
        pageC: './src/js/pageC.js',
        index: './src/js/index.js'
    },
    output: {
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[id].chunk.js',
        path: path.join(__dirname, 'dist'),
        //publicPath 上线替换真实的http,如果设置为/则需把dist下的文件放在项目的根目录
        //publicPath:'http://localhost:3000/'
        publicPath:'/'
    },
    module: {
        rules: [
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            chunks: ["pageA", "pageB", "pageC"],//提取公用模块
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html',
            chunks: ['vendors', 'index'],
            // hash:true,
            minify: {
                removeComments: true,
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/pageA.html",
            filename: 'pageA.html',
            chunks: ['vendors', 'pageA'],
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new ExtractTextPlugin({
            //生成css文件名
            filename: 'static/css/[name].css',
            disable: false,
            allChunks: true
        }),
        //webpack自带的js压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        /* new UglifyJSPlugin()*/
    ],
    //方便开发使用，浏览器输入：http://localhost:3000访问
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        host:'localhost',
        compress:true,
        port:3000,
        inline:true,
        hot:true
    }
}