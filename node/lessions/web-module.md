## nodejs web 模块

> 什么是web服务器

`web服务器是一般址网站服务器，是指驻留在因特网上某种类型的计算机的程序。`web服务器的基本功能就是提供web信息浏览服务。
它只支持http协议、html文档格式以及url，与客户端的网络浏览器配合。
大多数的web服务器都支持服务端的脚本语言（php、python、ruby）等，并通过脚本语言从数据库中获取数据，将结果返回给客户端浏览器。
目前最主流的三个web服务器是apache、nginx、iis。

> web 应用架构

<img src="../dist/imgs/web_module_img01.jpg">

- Client 客户端，一般指浏览器，浏览器可以通过http协议向服务器请求数据。
- Server 服务端，一般指web服务器，可以接收客户端请求，并向客户端发送响应数据。
- Business 业务层，通过web服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
- Data 数据层，一般有数据库组成。

> 使用node创建web服务器

nodejs提供了http模块，http模块主要在于搭建http服务端和客户端，使用http服务器或客户端功能必须调用http模块，代码如下：
```javascript

var http = require('http');

```
以下是演示一个最基本的http服务器架构（使用8081端口），创建server.js文件，代码如下所示：
```javascript

var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function(request,response){
	//解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	//输出请求的文件名
	console.log('Request for '+pathname + ' recieved.');

	//从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.log(err);

			// HTTP 状态码: 404 : NOT FOUND
         	// Content Type: text/plain
			response.writeHead(404,{'Content-Type':'text/plain;charset:utf8'});
		}else{
			// HTTP 状态码: 200 : OK
         	// Content Type: text/plain
         	response.writeHead(200,{'Content-Type':'text/plain;charset:utf8;'});

         	//响应文件内容
         	response.write(data.toString());
		}

		//发送响应数据
		response.end();
	});
}).listen(8081);

//控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081');

```

接下来我们在该目录下创建一个index.html文件，代码如下：
```javascript

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sample Page</title>
</head>
<body>
	<h1>hello world!</h1>
</body>
</html>

```

执行server.js文件：
```javascript

$ node server.js
Server running at http://127.0.0.1:8081

```
接着我们在浏览器中打开网址`http://127.0.0.1:8081/index.html或者localhost:8081/index.html`，显示如下面所示：

<img src="../dist/imgs/web_module_img02.jpg">




































