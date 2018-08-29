## 基于webpack的多页脚手架 for webpack3
> 这个完全基于webpack的配置，适用于一些官网产品类介绍的静态网页。可以使用scss,es6，并实现代码压缩，css压缩
>更新到webpack3

## master分支不在更新，请移至webpack3分支
### 功能完成
 功能  
- css压缩，scss编译
- js压缩
- 动态读取入口配置文件
- 动态设置HtmlWebpackPlugin实现多页打包配置
- 启动webpack-dev-server（自动刷新）

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
│  .babelrc
│  .gitignore
│  .postcssrc.js
│  getEntrys.js
│  package-lock.json
│  package.json
│  README.md
│  webpack.config.js
│  
├─config
│      base.plugin.js //包含动态生成HtmlWebpackPlugin
│      entrys.js  //动态入口与HtmlWebpackPlugin动态生成
│      utils.js
│      
└─src
    ├─assets
    │  ├─css
    │  │  │  bootstrap.css
    │  │  │  index.scss
    │  │  │  
    │  │  ├─pageA
    │  │  │      a.css
    │  │  │      as.scss
    │  │  │      
    │  │  ├─pageB
    │  │  │      b.css
    │  │  │      bb.scss
    │  │  │      
    │  │  └─pageC
    │  │          c.css
    │  │          
    │  ├─fonts
    │  │      glyphicons-halflings-regular.eot
    │  │      glyphicons-halflings-regular.svg
    │  │      glyphicons-halflings-regular.ttf
    │  │      glyphicons-halflings-regular.woff
    │  │      glyphicons-halflings-regular.woff2
    │  │      
    │  └─img
    │          ph.jpg
    │          
    ├─common
    │  ├─css
    │  │      reset.css
    │  │      
    │  └─js
    │          common.js
    │          
    ├─js
    │  │  testm.js
    │  │  
    │  └─other
    │          a.js
    │          b.js
    │          
    ├─lib
    │      test.js
    │      
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

#### webpack4配置悄悄改动中~~
