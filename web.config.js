/**
 * 打包配置
 * publicPath:根据运行环境设置  //  isDev ? "/" : "http://cdn.xx.com/"
 * port http端口号
 */

let isDev = process.env.NODE_ENV == "development";

module.exports = {
  publicPath: isDev ? "/" : "/",
  port: 3000 //dev模式下http端口号
};
