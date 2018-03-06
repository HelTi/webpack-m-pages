# 基于webpack的多页脚手架
> 这个完全基于webpack的配置，适用于一些官网产品类介绍的静态网页。可以使用scss,es6，并实现代码压缩，css压缩
>更新到webpack3
- 不在动态的读取文件，webpack3报错，所以改为读取文件写入配置。这样就行了
> 注意：`构建前，运行 node output生成配置文件 :-)`,为了适配webpack3

# master分支不在更新，请移至webpack3分支
## 功能完成
 功能  
- css压缩，scss编译
- js压缩
- 动态读取入口配置文件
- 动态设置HtmlWebpackPlugin实现多页打包配置
- 启动webpack-dev-server（自动刷新）

## 目录结构说明
```
│  .babelrc
│  .gitignore
│  a.txt
│  base.plugin.js //动态生成HtmlWebpackPlugin
│  entry.config.js//读取多页入口文件
│  package.json
│  pagesArray.js //获取多页文件，HtmlWebpackPlugin的参数
│  README.md
│  utils.js  //生产环境与开发环境
│  webpack.config.js
│  
└─src
    ├─common //公用样式
    │  ├─css
    │  │      reset.css
    │  │      
    │  └─js  //公用js
    │          common.js
    │          easyTable.js
    │          
    ├─css
    │  │  bootstrap.css
    │  │  index.css
    │  │  
    │  ├─pageA
    │  │      a.css
    │  │      as.scss
    │  │      
    │  ├─pageB
    │  │      b.css
    │  │      bb.scss
    │  │      
    │  └─pageC
    │          c.css
    │          
    ├─fonts
    │      glyphicons-halflings-regular.eot
    │      glyphicons-halflings-regular.svg
    │      glyphicons-halflings-regular.ttf
    │      glyphicons-halflings-regular.woff
    │      glyphicons-halflings-regular.woff2
    │      
    ├─img
    │      ph.jpg
    │      
    ├─js
        │      index.js
        │      mod.js
        │      pageA.js
        │      pageB.js
        │      pageC.js
        │      testm.js
        │      
        ├─lib
        │      easyTable.js
        │      mod.js
        │      
        └─pages
                index.html
                pageA.html
                pageB.html
                pageC.html
```
## 打包后的目录
```
│  index.html
│  pageA.html
│  pageB.html
│  pageC.html
│  
└─static
    ├─css
    │      index.css
    │      index.css.map
    │      pageA.css
    │      pageA.css.map
    │      
    ├─fonts
    │      glyphicons-halflings-regular.eot
    │      glyphicons-halflings-regular.ttf
    │      glyphicons-halflings-regular.woff
    │      glyphicons-halflings-regular.woff2
    │      
    ├─img
    │      glyphicons-halflings-regular.f721466.svg
    │      ph.50e1eb2.jpg
    │      
    └─js
            indexa94351a6f2b24f4c647a.js
            moda94351a6f2b24f4c647a.js
            pageAa94351a6f2b24f4c647a.js
            pageBa94351a6f2b24f4c647a.js
            pageCa94351a6f2b24f4c647a.js
            testma94351a6f2b24f4c647a.js
            vendorsa94351a6f2b24f4c647a.js
            
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




<div>
<p>贡献者
<a href="https://github.com/dengV"> 邓江洲 @ ZTO Express</a>
</p>
</div>
