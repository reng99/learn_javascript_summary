## nodejs 函数

> 在javascript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

nodejs中函数的使用与javascript类似，举例子来说：
```javascript

function say(word){
	console.log(word);
}

function execute(someFunction,value){
	someFunction(value);
}

execute(say,'hello');

```
以上代码中，我们把say函数作为execute函数的第一个变量进行了传递。这里返回的不是say的返回值，而是say本身。这样一来就变成了execute在调用someFunction，execute可以通过调用someFunction()`带括号的形式`来使用say函数。
当然，因为say有一个变量，execute在调用someFunction时可以传递这样一个变量。

### 匿名函数
我们可以将一个函数作为变量传递。但是我们不一定要这个`先定义，再传递`。我们可以直接在另一个函数的括号中定义和传递这个函数。
```javascript

function execute(someFunction,value){
	someFunction(value);
};

execute(function(word){
	console.log(word);
},'hello');

```
我们在execute接受第一个参数的地方直接定义了我们准备传递给execute的函数。
用这种方式，我们甚至不用给这个函数起名字，这也是为什么叫做匿名函数。

### 函数传递是如何让http服务器工作的
带着这些知识，看看简约而不简单的http服务器：
```javascript

var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');
	response.end();
}).listen(8888);

```
现在它看上去清晰很多了：向createServer函数传递一个匿名函数。
用下面这样的代码一样达到同样的目的：
```javascript

var http = require('http');

function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');
	response.end();
}

http.createServer(onRquest).listen(8888);

```
































