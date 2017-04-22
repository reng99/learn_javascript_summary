## nodejs 路由

> 我们要为路由提供请求的url和其他需要get以及post参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看http请求，从中提取出请求的url以及get/post参数，这一功能应当属于路由还是服务器（甚至一个模块自身的功能）确实值得探讨，但是这里暂定其为我们的http服务器的功能。
`我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递`，但是为了解析这些数据，我们需要额外的nodejs模块，它们分别是url和querystring模块。
```javascript

                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------   -------------------
http://localhost:8888/start ? foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]

```
更加详细的url，请参考[详细版url解析](http://nodejs.cn/api/url.html)。

我们也可以用querystring模块来解析post请求体中的参数，稍后会有演示。
现在来给onRequest()函数加上一些逻辑，用来找出浏览器请求的url路径：
```javascript

var http = require('http');

var url = require('url');

function start() {
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request fot '+pathname + 'received.');
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('Hello World');
		response.end();
	}

	http.createServer(onRequest).listen(8888);
}

exports.start = start;

```
我们的应用现在可以通过请求的url路径来区分不同的请求了--这使得我们得以使用路由（还未完成）来将请求以url路径为基准映射到处理程序上。
在我们所需要的构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理，稍后我们将看到这些内容是如何整合到一起的。
现在我们可以来编写路由了，建立一个名为router.js文件，添加以下内容：
```javascript

function route(pathname){
	console.log('About to route a request for '+pathname);
}

exports.route = route;

```
如上，这段代码什么也没干，不过对于现在来说这是应该的，在添加更过的逻辑之前，我们先来看看如何把路由和服务器整合起来。
我们的服务器应该知道路由的存在并加以有效利用。我们当然可以通过硬编码的方式将这一依赖绑定到服务器上，但是其它语言的编程经验告诉我们这会是一件非常痛苦的事情，因此我们将使用`依赖注入`的方式较松散地添加路由模块。
首先，我们来扩展一下服务器的start()函数，以便将路由函数作为参数传递过去，server.js文件代码如下：
```javascript

var http = require('http');
var url = require('url');

function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+pathname+' received.');

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write("Hello World");
	    response.end();
	}

	http.createServer(onRequest).listen(8888);
  	console.log("Server has started.");

}

exports.start = start;

```
同时，我们响应扩展index.js，使得路由函数可以被注入到服务器中：
```javascript

var server = require('./server');
var router = require('./router');

server.start(router.route);

```
在这里，我们传递的函数依旧什么也没有做。
如果启动应用（node index.js），随后请求一个url，你将看到应用输出相应的信息，这表明我们的http服务器已经在使用路由模块了，并将请求的路径传递给路由：
```javascript

$ node index.js
Server has started.

```





























