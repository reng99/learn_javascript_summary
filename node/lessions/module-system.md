## nodejs 模块系统

> 为了让 nodejs 的文件可以相互调用，nodejs提供了一个简单的模块系统。

模块是nodejs应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个nodejs文件就是一个模块，这个文件就是javascript代码、JSON或者编译过的c/c++扩展。

### 创建模块
在nodejs中，创建一个模块非常简单，如我们创建一个`main.js`文件，代码如下：
```javascript

var hello = require('./hello');

hello.world();


```
以上实例中，代码require('./hello')引入当前目录下的hello.js文件`./为当前文件，nodejs默认后缀为js`。
nodejs提供了exports和require两个对象，其中exports是模块公开接口，require用于外部获取一个模块接口，即所获取模块的exports对象。
接下来创建hello.js文件，代码如下
```javascript

exports.world = function(){
	console.log('hello world');
}

```
在以上的示例中，hello.js通过exports对象把world作为模版的接口访问，在main.js中通过`require('./hello')`加载这个模块，然后就可以直接访问hello.js中exports对象的成员函数了。
有时候我们只是想把一个对象封装到模块中，格式如下：
```javascript

module.exports = function(){
	//...
}

```
例如：
```javascript

//hello.js
function Hello(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayHello = function(){
		console.log('hello '+name);
	};
};

module.exports = Hello;

```
这样我们就可以直接获得这个对象了：
```javascript

//main.js
var Hello = require('./hello');

hello = new Hello();

hello.setName('reng');
hello.sayHello();

```
模块接口的唯一变化是使用module.exports = Hello代替了exports.world = function(){}。在外部引用该模块的时，其接口对象就是要输出的Hello对象本身，而不是原先的exports。

### 服务端的模块放在哪里
可能你已经注意到，我们在代码中使用了模块了。像下面这样：
```javascript

var http = require('http');

...

http.createServer(...);

```
nodejs中自带了一个叫做`http`的模块，我们在我们的代码中请求它并把返回值赋给了一个本地变量。
这把我们的本地变量变成了一个拥有所有http模块所提供的公共方法的对象。
nodejs的require方法中的文件查找策略如下：

由于nodejs中存在`四`类模块（原生模块和3种文件模块），尽管require的方法极其简单，但是内部的加载却是十分复杂的，其优先级也各有不同。如下图所示：

<img src="../dist/imgs/module-img.jpg">

> 从文件模块缓存中加载

尽管原生模块和文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块。

> 从原生模块加载

原生模块的优先级仅次于文件模块缓存的优先级。require方法在解析文件名之后，优先检查模块是否在原生的列表中。
以http模块为例，尽管在目录下存在一个`http/http.js/http.node/http.json文件`，文件都不会从这些文件中加载。
原生模块也有一个缓存区，同样也是优先级从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。

> 从文件中加载

当文件模块缓存中不存在，而且不是原生模块的时候，nodejd会解析require方法传入的参数，并从文件系统中加载实际的文件，加载的过程中的包装和变异细节在前面介绍过，这里我们详细讲下查找文件模块的过程，其中，也有一些细节值得知晓。

require方法接受以下几种参数的传递：
- http、fs、path等，原生模块。
- ./mod或../mod，相对路径的文件模块。
- /pathtomodule/mod,绝对路径的文件模块
- mod,非原生模块的文件模块

在路径y 下执行require(x)语句执行顺序：
```

1. 如果 X 是内置模块
   a. 返回内置模块
   b. 停止执行
2. 如果 X 以 '/' 开头
   a. 设置 Y 为文件根路径
3. 如果 X 以 './' 或 '/' or '../' 开头
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
4. LOAD_NODE_MODULES(X, dirname(Y))
5. 抛出异常 "not found"

LOAD_AS_FILE(X)
1. 如果 X 是一个文件, 将 X 作为 JavaScript 文本载入并停止执行。
2. 如果 X.js 是一个文件, 将 X.js 作为 JavaScript 文本载入并停止执行。
3. 如果 X.json 是一个文件, 解析 X.json 为 JavaScript 对象并停止执行。
4. 如果 X.node 是一个文件, 将 X.node 作为二进制插件载入并停止执行。

LOAD_INDEX(X)
1. 如果 X/index.js 是一个文件,  将 X/index.js 作为 JavaScript 文本载入并停止执行。
2. 如果 X/index.json 是一个文件, 解析 X/index.json 为 JavaScript 对象并停止执行。
3. 如果 X/index.node 是一个文件,  将 X/index.node 作为二进制插件载入并停止执行。

LOAD_AS_DIRECTORY(X)
1. 如果 X/package.json 是一个文件,
   a. 解析 X/package.json, 并查找 "main" 字段。
   b. let M = X + (json main 字段)
   c. LOAD_AS_FILE(M)
   d. LOAD_INDEX(M)
2. LOAD_INDEX(X)

LOAD_NODE_MODULES(X, START)
1. let DIRS=NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_AS_FILE(DIR/X)
   b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS

```


> 补充 2017-10-08

一个文件就是一个模块（module）

每个模块都有自己的作用域。

我们使用var来申明一个变量，它并不是全局的，而是属于当前模块下的。

```javascript

var  a = 10;

console.log(a); // 10

console.log(global.a); // undefined

```

模块加载系统

```javascript

require('模块');

eg: require('./reng.js');

```

模块加载机制的路径

绝对路径--也就是当前模块在电脑硬盘上的路径：

```javascript

require('b:/path/to/reng.js');

```

相对路径--相同目录低下的文件的路径

```javascript

require('./reng.js');

```

require模块查找机制

```bash

// 1.首先按照加载的模块的文件名称进行查找

// 2.如果还是没有找到的话，则会在模块文件名后面加上.js后缀，进行查找

// 3.如果还是没有找到，则会在文件名称的后面加上.json后缀，进行查找

// 4.如果还是没有，则会在文件名称后面加上.node的后缀，进行查找

// 5.如果还是没有找到的话就抛出错误

```























