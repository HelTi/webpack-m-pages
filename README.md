## 基于webpack的多页脚手架 for webpack4
> 这个完全基于webpack的配置，适用于一些官网产品类介绍的静态网页。可以使用scss,es6，并实现代码压缩，css压缩
>更新到webpack3

### 功能完成
 功能  
- css压缩，scss编译
- js压缩
- 动态读取入口配置文件
- 动态设置HtmlWebpackPlugin实现多页打包配置
- 启动webpack-dev-server（自动刷新）

### 增加打包配置文件 web.config.js

```js
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
```
 
### 页面配置规则
> 保持html文件名与入口js文件名一致，使用glob模块，动态读取文件夹生成配置
```
    └─pages //页面配置目录
        ├─index
        │      index.html
        │      index.js
        │      
        ├─pageA
        │      pageA.html
        │      pageA.js
        │      
        └─pageB
                pageB.html
                pageB.js
```

### 目录结构说明
```

            
```
#### 安装依赖
> npm install
#### 打包
> npm run build
#### 启动服务
> npm run start
>启动服务后访问
- http://localhost:3000/index.html
- http://localhost:3000/pageA.html
- .....
