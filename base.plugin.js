/**
 * Created by Administrator on 2017/6/24 0024.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//html页面 pagesArray
var pagesArray =require('./pagesArray');
let base_plugin = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        chunks: ["pageA", "pageB", "pageC"],//提取公用模块
        minChunks: Infinity
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
/*遍历页面，添加配置*/
pagesArray.forEach((page)=>{
    const htmlPlugin = new HtmlWebpackPlugin({
        template: page.template,
        filename: page.filename,
        chunks: ['vendors', page.chuckName],
        // hash:true,
        minify: {
            removeComments: true,
            collapseWhitespace: false //删除空白符与换行符
        }
    });

    base_plugin.push(htmlPlugin)
})

module.exports = base_plugin;