> nodejs 事件循环
nodejs是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
nodejs的每个api都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
nodejs基本上所有的事件机制都是用设计模式中[观察者模式](../questions/watcher-model.md)实现的。
nodejs单线程类似进入了一个while(true)的事件循环，直到没有事件观察者退出，每一个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。

### 事件驱动程序
```

nodejs使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

//对上面的的这段话，可以用平时在饭店点餐进行类比。当我们去到饭店吃饭，先跟服务员点餐，然后拿着号码牌等候，此时服务员还可以接着为后续的人员点餐。当我们的餐已经做好了，服务员就会叫我们的号。

```
这个模型非常高效可扩展性非常强，因为web server一直接受请求而不用等待任何的读写操作。（这也被称为非阻塞式io/或者事件驱动）

`在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时候就触发回调函数。`
<img src="../dist/imgs/event_loop.jpg">
整个的事件驱动就是这样实现的，非常简洁，有点类似观察者模式，事件相当于一个主题(subject)，而所有注册到这个事件上的处理函数相当于观察者(object)。
nodejs 有很多的内置的事件，我们可以通过引入events模块，并通过实例化eventemitter类来绑定和监听事件，如下实例：
```javascript

//引入events模块
var events = require('events');

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

```
以下程序绑定事件处理程序：
```javascript

//绑定事件及事件的处理程序
eventEmitter.on('eventName',eventHandler);

```
我们可以通过程序触发事件：
```javascript

//触发事件
eventEmitter.emit('eventName');

```

### 实例
创建main.js文件，代码如下：
```javascript

//引入events模块
var events = require('events');

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功。');

	// 触发data_received事件
	eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
	console.log('数据接收成功。');
});

//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕。');

```
接下来让执行以上的代码：
```javascript

$ node main.js
链接成功。
数据接收成功。
程序执行完毕。

```


> node 应用程序是如何工作的？
在node应用程序中，`执行异步操作的函数将回调函数作为最后一个参数`，回调函数`接收错误对象(err)作为第一个参数`。
接下来重新看一下前面的例子，创建一个input.txt，文件内容如下：
```javascript

hello world.

```
创建main.js文件，代码如下：
```javascript

//引入文件系统模块
var fs = require('fs');

//异步读取文件
fs.readFile('input.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log('program end');

```
以上程序中fs.readFile()是一个`异步函数`用于读取文件。如果在读取文件过程中发生错误，错误err对象就会输出错误信息。
如果没有发生错误，readFile跳过err对象的输出，文件内容就通过回调函数输出。
执行上面的代码，执行结果如下：
```javascript

program end
hello world

```
接下来我们删除input.txt文件，执行结果如下显示：
```javascript

program end
Error : ENOENT,open 'input.txt'

```
因为文件input.txt不存在，所以输出了错误信息。




























