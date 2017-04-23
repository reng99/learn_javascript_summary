## nodejs 多进程

我们知道nodejs是以单线程的模式运行的，但是它使用的是事件驱动来处理并发，这样有助于我们在多核的cpu系统上创建多个子进程，从而提高性能。
`每个进程总是带有三个流对象：child.stdin,child.stdout和child.stderr`。它们可能共享父进程的stdin流，或者也可以是独立的被导流的流对象。
node提供了child_process模块来创建子进程，方法有：

- exec - child_process.exec使用子进程的命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
- spawn - child_process.spawn 使用指定的命令行参数创建新进程。
- fork - child_process.fork是spawn()的特殊形式，用于在子进程中运行模块，如fork('./son.js')相当于spawn('node',['./son.js'])。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。


### exec()方法

child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
语法如下所示：
```javascript

child_process.exec(command[,option],callback)

```
> 参数

参数的说明如下：
command:字符串，将要运行的命令，参数使用空格隔开
option:对象，可以是：
- cwd 字符串，子进程的当前工作目录
- env 对象环境变量键值对
- encoding 字符串，字符编码，默认是utf8
- shell 字符串，将要执行的命令shell（默认：在unix中为／bin/sh,在window中为cmd.exe，shell应当识别-c开关在unix中，或/s /c在window中，命令行解析应当能兼容cmd.exe）
- timeout 数字，超时时间（默认为0）
- maxBuffer 数字，在stdout或stderr中允许存在的最大缓冲（二进制），如果超出那么子进程将会被杀死（默认为200*1024）
- killSignal 字符串，结束信号（默认：‘SIGTERM’）
- uid 数字，设置用户进程的ID
- gid 数字，设置进程组的ID

callback：回调函数，包含三个参数error,stdout和stderr。
exec()方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容。

> 实例
我们创建两个js文件support.js和master.js。
support.js文件代码：
```javascript

console.log('进程'+process.argv[2]+'执行。');

```
master.js文件代码：
```javascript

const fs = require('fs');
const child_process = require('child_process');

for(var i = 0;i < 3 ;i++){
	var workerProcess = child_process.exec('node support.js '+i,function(error,stdout,stderr){
		if(error){
			console.log(error.stack);
			console.log('Error code: '+error.code);
			console.log('Signal received :'+error.signal);
		}
		console.log('stdout:'+stdout);
		console.log('stderr:'+stderr);
	});

	workerProcess.on('exit',function(code){
		console.log('子进程已退出，退出码'+code);
	});
}

```
执行上面的代码，输出结果为：
```javascript

$ node master.js
子进程已退出，退出码 0
stdout: 进程 1 执行。

stderr: 
子进程已退出，退出码 0
stdout: 进程 0 执行。

stderr: 
子进程已退出，退出码 0
stdout: 进程 2 执行。

stderr: 

```



























