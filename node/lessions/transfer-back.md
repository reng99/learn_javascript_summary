## nodejs的回调函数

nodejs异步编程的直接体现就是在回调。
异步编程依托于回调来实现，但是不能说使用了回调后程序就异步化了。
回调函数在完成任务后就会被调用， node 使用了大量的回调函数，node所有api都支持回调函数。

`例如：可以一边读取文件，一边执行其他命令，在文件读取完成之后，将文件内容作为回调函数的参数返回。这样在执行代码时候就没有阻塞或者等待文件i/o操作。这就大大提高了nodejs的性能，可以处理大量的并发请求。`

### 阻塞代码实例
创建一个文件input.txt,内容如下
```javascript

hello world

```
创建一个main.js文件，里面的代码如下：
```javascript

var fs = require('fs');

//这里的sync是synchronization(同步)
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('program end');

```
以上代码执行的结果如下：
```javascript

$ node main.js
hello world
program end

```

### 非阻塞代码实例
创建一个文件input.txt,内容如下:
```javascript

hello world

```
创建main.js文件，代码如下：
```javascript

var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
});

console.log('program end');

```
以上代码执行结果如下：
```javascript

$ node main.js
program end
hello world

```

`通过以上的两个实例，可以了解了阻塞和非阻塞调用的不同，第一个实例就是在文件读取后才执行程序。第二个实例不需要我们等待文件读取完，这样就可以在读取文件时候同时执行接下来的代码，大大提升了程序的性能。`
因此，阻塞是按`顺序`执行的，而非阻塞是`不需要按照顺序的`，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
















