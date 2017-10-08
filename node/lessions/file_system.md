## 文件系统模块

```javascript

var fs = require('fs');

```

```bash

fs.open(path,flags,[mode],callback) // 异步打开一个文件，以callback回调的方式进行处理,不会阻塞后续代码的执行。可以比较下面的fs.openSync

path:要打开的文件的路径

flags:打开文件的方式 读／写

mode:设置文件的模式 读／写／执行（4/2/1）

callback：回调
    err:文件打开失败的错误保存在err里面，如果成功，err为空
    fd:被打开文件的标识，和定时器

```


```bash

fs.openSync(path,flags,[mode])  //同步操作 ，阻塞后续代码的执行。没有callback方法，没有返回值。可以比较前面的fs.open

```


```bash

// 读取文件

fs.read(fd,buffer,offset,length,position,callback); // 也有fs.read的同步版本，可参考fs.open

  fd:通过open方法成功打开一个文件返回的编号
  
  buffer:buffer 对象
  
  offset:偏移量
  
  length:添加到buffer中内容的长度
  
  position:读取文件中的起始位置
  
  callback:回调
    err:错误信息
    len:buffer长度
    buffer:buffer对象

```

```bash
fs.write(fd,buffer,offset,length[,position],callback);// 也有同步的版本

  fd:打开的文件
  
  buffer:要写入的数据
  
  offset：buffer对象中要写入的数据的起始位置
  
  length:要写入的buffer数据的长度
  
  position：fd中的真实位置
  
  callback:回调


```

```bash

fs.close(fd,callback); // 也有同步的版本

```

**fs.writeFile**

```bash

fs.writeFile(filename,data,[options],callback)
  异步的将数据写入到一个文件，如果文件不存在则新建，如果文件存在，会被替换。data可以是一个string,也可以是一个原生的buffer
  
  有同步的版本方法，自查fs.writeFileSync

```

**fs.appendFile**

```bash

fs.appendFile(filename,data,[options],callback);
  异步的将数据添加到一个文件的尾部，如果一个文件不存在，会创建一个新的文件。data可以是一个string,也可以是一个原生的buffer。
  
  有同步的版本，自查fs.appendFileSync

```






























