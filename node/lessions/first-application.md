> nodejs应用的组成部分

- [引入required模块]
	可以使用require指令来载入nodejs模块。
- [创建服务器]
	服务器可以监听客户端的请求，类似于apache、nginx等htto服务器。
- [接收请求和响应请求]
	服务器很容易创建，客户端可以使用浏览器或终端发送http请求，服务器接收请求后返回响应的数据。

> 创建nodejs应用

- [步骤一、引入require模块]
	我们使用require指令来载入http模块，并将实力化的http赋值给变量http，实例如下：
```javascript

var http = require('http')

```
- [步骤二、创建服务器]
	接下来我们使用http.createServer()方法创建服务器，并使用listen方法绑定8888端口，函数通过request，response参数来接收和响应数据。
	实例如下，在自己的项目的根目录下新建一个叫做server.js的文件，并写入以下的代码：
```javascript

var http = require(http);

//request一般简写为req，response一般简写为res
http.createServer(function(request,response){
	
	//发送http头部
	//http 状态类型:200 ok
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送响应数据'hello world'
	response.end('hello world');
}).listen(8888);

//在终端打印如下信息
console.log('server running at http://127.0.0.1:8888');
//http:127.0.0.1是本地回环测试地址，也就是localhost

```
以上的代码完成了一个可以工作的http服务器
使用node命令执行上面的代码：
```javascript

node server.js
server running at http://127.0.0.1:8888

```
这时候在浏览器中的url中输入`http://127.0.0.1:8888`就可以看到效果，
在浏览器中的页面会出现`hello world`的字样

> 分析nodejs的http 服务器

- [第一行请求(require)nodejs自带的http模块，并将它赋值给http变量]

- [接下来就是调用了htpp模块提供的函数：createServer。这个函数会返回一个对象，这个对象有一个叫做listen的方法，这个方法有一个数值参数，指定这个http服务器监听的端口号。]
