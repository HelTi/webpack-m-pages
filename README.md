# webpack多页配置
**当前webpack版本v4**
## 功能 
-[x] css压缩，scss编译  
-[x] 使用npm包  
-[x] js压缩  
-[x] 动态读取入口配置文件   
-[x] 动态设置HtmlWebpackPlugin实现多页打包配置
-[x] 启动webpack-dev-server（自动刷新）  
-[x] eslint校验  
-[ ] 动态cdn配置 （公共库使用cdn，也就是通过css标签和script标签引入，避免使用webpack打包，从而降低打包体积与访问速度）   
-[ ] web.config.js增加对webpack配置运行扩展

## web.config.js配置文件
参数|说明|类型|默认值
---|:--:|:---:|---:
publicPath|webpack的打包公共路径|string| /
port|webpack-dev-server的端口号|number| 3000
host|webpack-dev-server的服务host|string| localhost
externals|webpack的externals|object| {}
externals|webpack的externals|object| {}
 
## 页面路径规则
**保持html文件名与入口js文件名一致，使用glob模块，动态读取文件夹生成配置**
### 示例
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

## 目录结构说明
```
├── config
│   ├── createHtmlWebpackplugin.js
│   ├── entrys.js
│   ├── utils.js
│   ├── webpack.common.js  // webpack公共配置
│   ├── webpack.dev.js
│   └── webpack.prd.js
├── package-lock.json
├── package.json
├── prettier.config.js
├── src
│   ├── assets  // 静态资源文件夹
│   ├── pages   // 页面目录
│   ├── static  // 静态文件夹,会原样的打包到根目录不做资源处理
│   └── utils
└── web.config.js  //一些常用的webpack配置选项
            
```
## 安装依赖
> npm install
## 打包
> npm run build
## 启动服务
> npm run start
>启动服务后访问
- http://localhost:3000/
- http://localhost:3000/pageA.html
