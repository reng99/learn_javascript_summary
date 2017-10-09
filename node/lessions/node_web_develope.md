## 使用node 进行web开发

**用户浏览一个网页发生的事情**

```bash

http://www.baidu.com

1.用户通过浏览器发送一个http的请求到指定的主机（服务器）

2.服务器接收到该请求后，对该请求进行分析和处理

3.服务器处理完成之后，返回对应的数据到用户的机器

4.浏览器接收服务器返回的数据，并根据接收到的进行分析和处理


客户端     服务端

由客户端发送一个http请求到指定的服务端 -> 服务端接收并处理请求 -> 返回数据到客户端


```

**搭建一个http服务**

```bash

搭建一个http的服务器，用于处理用户发送的http请求

需要使用node提供一个模块 http

```

```javascript

//加载一个 http模块
var http = require("http");

// 通过http模块下的ceateServer创建并返回一个web服务器对对象
var server = http.ceateServer();

// 监听客户端链接请求，只有当调用了listen方法之后，服务器才开始工作
server.listen();


```







