# Node.js 的生态 - NPM
* NPM is the world's largest software registry. 
  Open sources developers from every continent use npm to share and borrow packages,
  and many organizations use npm to manage private development as well. 
    * 专门用来安装node的包 module
    * Node 和 NPM基本是绑定安装的关系 // npm -v
    * NPM 这个概念非常常见，类似于gitHub，我们把自己的repository上传到GitHub 上
    其他人可以访问我们的代码仓库，下载我们的代码
    * NPM是用户专门管理node package 的
    * 官网：npmjs.com 
    * DT 代表支持typeScript了
    * read me
    
# Express 
* https://www.npmjs.com/package/express
* Readme explore
* 3D Dependencies 依赖于什么安装包 
* versions 发布了那些版本号 
* cd destination file path
* npm init -y //初始化 才会有package.json 
* npm i express === npm install express
* 安装好之后 
  * package.json -> 
  * node_nodules -> node的模块 
    * express folder -> package.json -> dependencies 是跟npm module 下面的folder name一致的
    * express 依赖于这30个package + 这三十个package依赖的其他的package
  * package-lock.json ->记录当前安装package /此时此刻你安装express的时候，express的版本是多少
    * 记录这个版本，并且lock住 
    * 等以后如果想安装同样名字的package，会按照package-lock.json里面的版本安装
    * 目的：帮我们把版本 固定在一个莫个具体的版本上 
  * package.json -> add dependencies (express:4.17.3)
  
## 为什么要使用npm 
* npm创建了 package.json 
* 在上传到git上的时候，要增加 .gitignore ->不要上传 node_modules,写法如下
  * node_modules/ ->指定 忽略 文件名为 node_modules 的folder
  * node_modules  -> 包含文件夹和文件
  
* .gitignore 放在文件的根目录下，对该文件下的所有文件生效 
* 所以不需要上传gitHub，然后下载的时候 （git pull）通过npm安装即可；
* npm install / npm i
  * 安装的时候，怎么知道安装那些package？ -> package.json 
    * 检查 package-lock.json 里面的版本号，并且安装；
  * 为什么要把版本号fix住
    * 新版本可能有新的bug，可能会破坏线上的环境
  
### 新建项目的顺序
* npm init -y
    * 必须要先init，否则不会有package.json 依赖不会写进去
* npm i express 
* 不要手动修改package.json 里面的dependencies 

### express version
* 不要手动修改package.json -里面的dependencies
* 新版本发布的时候，要升级的时候检查 change log -考虑影响； 

## Semantic version
* 如果有package-lock.json ->按照这里面的版本号按照
  * 要不然才会使用package.json 里面dependencies里面的版本号
* 新版本里面有小问题，修复之后，patch+1
* 加功能 feature minor +1 
* 代码有break change， major +1； 
* （向上箭头）latest version with the current major version fixed(major.X.X)
* ~ latest version with the current major and minor version fixed (major.minor.x)
* blank exact version match
```json
 "dependencies": {
  "express": "^4.18.1"
//            major.minor.patch
//            break change/feature change / bug fix
}
```
### install a specific version and update a package
* npm outdated -> 更新之前，可以看看那些package有新版本
  * wanted 版本号 是根据 最前面的符号决定的；
* npm install express@latest  ->安装最新的express
* npm install express@3 ->按照3.0版本的express
* npm update ->不常用，根据你想安装的版本更新 

### Dev dependencies and global dependencies
* npm -i nodemon --save-dev / npm -i nodemon -D
  * 安装dev的dependencies
  * -D 放在devDependencies里面
```json
"devDependencies": {
    "nodemon": "^2.0.19"
  }
```
  *Difference between dependencies and devDependencies
    * dependencies ->项目缺少了这个，完全无法运行
    * devDependencies -> 这个package只有在我开发的时候，才需要它。
    * 举例子 SAAS -> CSS工具 
      * 从SAAS转CSS 的工具，属于devDependencies，不属于项目的Dependencies.
* npm install ->安装所有的Dependencies
* global dependencies
  * 直接安装到本地计算机，可以在命令行里面使用这个命令
  * 目前不常用全局安装
  * npm i -g nodemon (sudo for mac)
  * 全局安装，安装到当前的机器上； 全局安装不会写到package.json里面
  这样其他用户不知道需要依赖 nodemon
  * 那些可能需要使用全局安装 
    * creat-react-app ->全局命令 
  * 为何不建议安装全局依赖，因为有npx -> binding with npm
  * 全局安装
    * npm i -g live-server 
    * liver-server path
  * npx 
    * npx liver-server path // 启动一个本地server，host你的html
    * 好处： 不需要长期占用硬盘空间 ， 永远获得最新的版本
## express 示例代码 create a server with express
* express  框架是帮助简化代码的
```javascript
var express = require('express');
var app = express(); // 把express当一个函数调用，创建一个application
//创建的app 告诉app 去监听那些路径，监听那些请求的http的method，对应这些请求做什么样的处理

// 三个参数 req, res, next
app.get('/', function (req,res){ // reqest includes url, method, headers, body
    // response ->
    res.send('Hello World');// 把hello world 发送给请求方
}); //监听'/',执行回调函数
app.listen(8888);//监听3000端口 
```
* 普通的 代码create a server
```javascript
const http = require('http');

const server = http.createServer((res,req) =>{
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
});
server.listen(8888);
```
## Run script with npm
* 理解为给一个长的命令，创建一个快捷方式 
* 好处在于，能用短的名字，调用一个非常长的命令 
* nodemon
  * 当前的项目有任何文件变化，帮助我们自动重启server
  * 开发的时候，需要经常修改文件，改动
  * 改动之后，不重启,修改的内容不会在页面生效
    * nodemon可以帮助我们做重启这件事情
    * npx nodemon index.js
```json
 scripts": {
"dev": "nodemon index.js"
}
// 命令行直接执行 npm run dev ->可以启动服务器
```
* 执行逻辑是：
  * 所有写在script'里面的命令 （nodemon index.js）
  * 先去 node_modules里面查找，是否存在，如果是，直接从node modules里面执行，传入相应的参数
  * 优点2： 可能会有特别长的命令
    * nodemon --restart-on-save index.js ->用简单指令执行这段长指令
  * 优点3：常见的命令有一些具体的参数