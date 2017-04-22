## nodejs stream(流)

> stream 是一个抽象接口，node中有很多对象实现了这个接口，例如，对http服务器发起请求的request对象就是一个stream，还有stdout(标准输出)。

nodejs,stream有四种流形式：
- [Readable] 可读操作。
- [Writable] 可写操作。
- [Duplex] 可读可写操作。
- [Transform] 操作被写入数据，然后读出结果。
所有的stream对象都是[EventEmitter](./event-emitter.md)的实例。常用的事件有：
- [data] 当有数据可读时触发。
- [end] 没有更多的数据可读时触发。
- [error] 在接收和写入过程中发生错误时触发。
- [finish] 所有数据已被写入到底层系统时触发。

### 从流中读取数据
创建input.txt文件，内容如下：
```

hello world

```
创建main.js文件，代码如下：
```javascript

var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf8
readerStream.setEncoding('utf8');

//处理流事件-->data,end,and err
readerStream.on('data',function(chunk){
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');

```
执行上面的代码，执行结果如下：
```

程序执行完毕
hello world

```

### 写入流
创建main.js文件，代码如下：
```javascript

//引入文件系统模块
var fs = require('fs');
var data = 'hello world';

//创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data,'utf8');

//标记文本末尾
writeStream.end();

//处理事件-->data,end and error
writeStream.on('finish',function(){
	console.log('写入完成。');
});

writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');

```
以上的代码会将data变量的数据写入到`output.txt`文件中。代码的执行结果如下：
```

$ node main.js
程序执行完毕
写入完成。

```
查看output.txt文件的内容
`hello world`


### 管道流
>  管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递另外一个数据中。

<img src="../dist/imgs/stream_pipe">

如上面图所示，我们把文件当作水的桶，而水就是文件的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入到另外一个桶，这样就慢慢的实现了大文件的复制过程。
一下实例我们通过读取文件内容将内容写入到另外一个文件中。
设置input.txt文件内容如下：
```

hello world

```
创建main.js文件，代码如下：
```javascript

var fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt 文件的内容，并将内容写入到output.txt 文件中
readStream.pipe(writeStream);

console.log('程序执行完毕');

```
代码执行结果如下：
```

$ node main.js
程序执行完毕

```
查看output.txt文件的内容：
```

$ cat output.txt
hello world

```

### 链式流

> 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。
创建compress.js文件，代码如下：

```javascript

var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadstream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');

```
代码执行结果如下：
```

$ node compress.js
文件压缩完成。

```
执行完上面的操作之后，我们可以看到当前的目录下面生成了input.txt的`压缩文件input.txt.gz`。
接下来，我们来解压该文件，创建decompress.js文件，代码如下：
```javascript

var fs =require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));

console.log('文件解压完成。');

```
代码执行结果如下：
```

$ node decompress.js
文件解压完成。

```

