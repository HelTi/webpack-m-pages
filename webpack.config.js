const webpack = require("webpack"); //
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const path = require("path");
const utils = require("./config/utils");

//获取所有入口文件配置
const { entries } = require("./config/entrys");
//获取输出配置
const base_plugin = require("./config/base.plugin");
//打包配置
let { publicPath, port } = require("./web.config");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  devtool: "#source-map",
  entry: entries(),
  output: {
    filename: "static/js/[name][hash].js",
    chunkFilename: "static/js/[id].chunk.js",
    path: path.join(__dirname, "dist"),
    //publicPath 上线替换真实的http,如果设置为/则需把dist下的文件放在项目的根目录
    // publicPath:'http://localhost:3000/'
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
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
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                outputStyle: "compressed",
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.html$/,
        loader: "html-loader?attrs=img:src img:data-src"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[ext]")
        }
      }
    ]
  },
  plugins: base_plugin,
  devServer: {
    contentBase: "./",
    host: "localhost",
    compress: true,
    port: port,
    inline: true
  }
};
