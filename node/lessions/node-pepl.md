> node.js pepl(交互解释器)

nodejs pepl表示一个电脑的环境，类似windoe系统的终端或者unix/linux shell，我们可以在终端输入命令，并接受系统的响应。
node自带了交互式解释器，可以执行以下任务：
- [读取]
	读取用户的输入，解析输入了javascript数据结构并存储在内存中。
- [执行]
	执行输入的数据结构
- [打印]
	输出结果
- [循环]
	循环操作以上步骤直到用户两次按下ctrl+c按钮退出

node的交互式解释器可以很好的调试javascript代码。
开始学习pepl
我们可以输入以下命令来启动node终端
```javascript

$ node
>

```
这时候我们就可以在>后输入简单的表达式，并按下回车键来计算结果。

### 简单的表达式运算
实现简单的运算如下
```javascript

$ node 
>1+1
2

```

### 使用变量
将数据结构存储在变量中，并将需要的时候使用它。
变量声明需要使用var关键字，如果没有使用var关键字变量会直接打印出来。
使用var关键字的变量使用console.log()来输出变量。

```javascript

$ node
> x=10
10
> var y = 10
undefined
> x+y
20
> console.log('hello world')

```

### 多行表达式
node pepl支持输入多行表达式，这就类似`javascript`。如下面的一个do-while循环：
```javascript

$ node
> var x= 0
undefined
> do {
... x++;
... console.log('x:'+x);
...}while(x<5);
x:1
x:2
x:3
x:4
x:5
undefined
>

```
`...`三个点事系统自动生成的，回车换行后即可。node会自动检测是否为连续的表达式。

### 下划线（_）变量
你可以使用下划线（_）获取表达式的运算结果：
```javascript

$ node
> var x = 10
undefined
> var y = 20
undefined
> x+y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
>

```

### pepl命令
- [ctrl+c] 退出当前终端
- [ctrl+c按下两次] 退出node pepl
- [ctrl+d] 退出node pepl
- [向上／向下键] 查看输入的历史命令
- [tab键] 列出当前命令
- [.help] 列出使用命令
- [.break] 退出多行表达式
- [.clear] 退出多行表达式
- [.save filename]  保存当前的node pepl会话到指定的文件
- [.load filename]  载入当前node pepl会话的文件内容

### 停止pepl
按下两次 ctrl + c 就能退出pepl
```javascript

$ node 
> 
(^c again to quit)
>

```














