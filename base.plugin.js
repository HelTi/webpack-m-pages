/**
 * Created by Administrator on 2017/6/24 0024.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let base_plugin = [
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
]