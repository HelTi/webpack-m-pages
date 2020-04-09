# 基于webpack的多页配置
基于webpack的多入口配置，通过html-webpack-plugin打包成多页

    当前webpack版本v4
## 功能 
- css压缩，scss编译
- 使用npm包
- js压缩
- 动态读取入口配置文件
- 动态设置HtmlWebpackPlugin实现多页打包配置
- 启动webpack-dev-server（自动刷新）
- eslint校验

### web.config.js配置文件

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
 
### 页面路径规则
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
- http://localhost:3000/
- http://localhost:3000/pageA.html
- .....
