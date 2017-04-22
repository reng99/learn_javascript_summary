## nodejs buffer(缓冲区)

关于缓存区的理解可以看下篇文章[C++编程中对缓冲区的理解](http://blog.csdn.net/yiruirui0507/article/details/6041155)

> javascript 语言自身只有字符串数据类型，没有二进制数据类型
但是凡在处理tcp流或文件流时，必须使用二进制数据。因此在nodejs中，定义了一个buffer类，该类用来创建一个专门存放二进制数据的缓存区。
在nodejs中，buffer类是随node内核一起发布的核心库。buffer库为nodejs带来了一种存储原始数据的方法，可以让nodejs处理二进制数据，每当需要在nodejs中处理i/o操作中移动的数据时，就可能使用buffer库。原始的数据存储在buffer类的实例中。一个buffer类似于一个整数数组，但是它对应于v8堆内存之外的一块原始内存。

### 创建buffer类
node buffer 类可以通过多种方式来创建。
> 方法一
创建一个长度为10[字节](http://baike.baidu.com/link?url=ZDnMsdIGWH6eOp5UImxAshS4OAOn0YvOlD8nDdgb5LBAJ7sesjzUBoiQo6Ggfll6y6XXnd0pp564QFTqtNcJWjKbdl5IhsEX85qyVQLQfCC)的buffer实例：
```javascript

var buf = new Buffer(10);

```
> 方法二
通过给定的数组创建Buffer实例：
```javascript

var buf = new Buffer([10,20,30,40,50]);

```
> 方法三
通过一个字符串来创建Buffer实例：
```javascript

var buf = new Buffer('hello world','utf-8');

```
`utf-8`是默认的编码方式，此外它同样支持一下的编码：
`ascii,utf8,utf16le,ucs2,base64和hex`

### 写入缓存区
> 语法
写入node缓存区的语法如下所示：
```javascript

buf.write(string[,offset[,length]][,encoding])

```
> 参数
参数描述如下：
- [string] 写入缓冲区的字符串。
- [offset] 缓冲区开始写入的索引值，默认是0。
- [length] 写入的字节数，默认是buffer.length
- [encoding] 使用的编码。默认是'utf8'／'utf-8'

> 返回值
返回实际写入的大小。如果buffer空间不足，则只会写入部分字符串。
#### 实例
```javascript

buf = new Buffer(256);
len = buf.write('hello world');

console.log('写入字节数：'+len);

```
执行上面的代码，输出的结果为：
```javascript

$ node main.js
写入字节数：11

```

### 从缓冲区读取数据
> 语法
读取node缓存区数据的语法如下：
```javascript

buf.toString([encoding[,start[,end]]]);

```

> 参数
参数的描述如下：
- [encoding] 使用的编码。默认是'utf-8'/'utf8'
- [start] 指定开始读取的索引位置，默认是0
- [end] 结束位置，默认为缓冲区的末尾

> 返回值
解码缓冲区数据并使用指定的编码返回字符串。

#### 实例
```javascript

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

```
执行上面的代码，输出结果为：
```javascript

$ node main.js
abcdefghijklmnopqrstuvwxyz
abcde
abcde
abcde

```

### 将buffer转换为json对象
> 语法
将node buffer转换为json对象的函数语法格式如下：
```javascript

buf.toJson()

```
> 返回值
返回json对象

#### 实例
```javascript

var buf = new Buffer('hello world');
var json = buf.toJSON(buf);

console.log(json);

```
执行上面代码，输出结果为：
```javascript

[ 104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100 ]

```

### 缓冲区合并
> 语法
node缓冲区合并的语法如下所示：
```javascript

Buffer.concat(list[,totalLength])

```
> 参数
- [list] 用于合并的Buffer对象数组列表。
- [totalLength] 指定合并后Buffer对象的总长度。

> 返回值
返回一个多个成员合并的新Buffer对象。

#### 实例
```javascript

var buffer1 = new Buffer('hello ');
var buffer2 = new Buffer('world');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 内容: " + buffer3.toString());

```
执行上面的代码，输出结果为：
```javascript

buffer3 内容:hello world

```

### 缓冲区的比较
> 语法
node buffer比较的函数语法如下，该方法在`nodejs v0.12.2`版本引入：
```javascript

buf.compare(otherBuffer);

```

> 参数
参数描述如下：
- [otherBuffer] 与buf对象比较的另外一个buffer对象。

> 返回值
返回一个数字，表示buf在otherBuffer之前，之后或相同。

#### 实例
```javascript

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

```
执行以上代码，输出结果为：
```

ABC在ABCD之前

```

### 拷贝缓冲区
> 语法
node 缓冲区拷贝语法如下所示：
```

buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])

```

> 参数
参数描述如下：
- [targetBuffer] 要拷贝的Buffer对象。
- [targetStart] 数字，可选，默认：0
- [sourceStart] 数字，可选，默认：0
- [sourceEnd] 数字，可选，默认：buffer.length

> 返回值
没有返回值。

#### 实例
```javascript

var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

```
执行上面代码，输出结果为：
```
buffer2 content:ABC

```

### 缓冲区裁剪
node缓冲区裁剪语法如下：
```

buf.slice([start[,end]])

```
> 参数
参数描述如下：
- [start] 数字，可选，默认：0
- [end] 数字，可选，默认：buffer.length

> 返回值
返回一个新的缓冲区，它和旧的缓冲区指向同一块内存，但是从索引start到end位置的裁切。

#### 实例
```javascript

var buffer1 = new Buffer('hello');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

```
执行上面的代码，输出的结果为：
```
buffer2 content : he

```

### 缓冲区的长度
> 语法
node缓冲区长度计算语法如下所示：
```
buf.length;

```
> 返回值
返回Buffer对象所占据的内存长度。

#### 实例
```javascript

var buffer = new Buffer('hello world');

console.log('buffer length :'+buffer.length);

```
执行上面的代码，输出结果为：
```

buffer length : 11

```


详细的参考，请移步[这里](http://www.runoob.com/nodejs/nodejs-buffer.html)

