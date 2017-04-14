# 函数部分

## 绑定函数

<a id="bind"></a>
> bind:
绑定函数到对象上，无论何时函数被调用，函数里面的this都是指向对象。
```javascript

var func = function(greeting){
	return greeting+":"+this.name;
};
func =_.bind(func,{name:'moe'},'hi');
console.log(func());
=>hi:moe

```
> bindAll:
绑定方法名到对象上，当这些方法被执行时将在对象上下文执行。如果不是很理解content,可以参考下[question0_context_argument.md](../questions/question0_context_argument.md)这篇文章。
绑定函数用作事件处理时非常方便，否则函数调用时this关键字根本没有什么用。
```javascript

var buttonView = {
	label:'underscore',
	onClick:function(){
		console.log('clicked:'+this.label);
	},
		onHover:function(){
		console.log('hovering:'+this.label);
	}
};
var func = _.bindAll(buttonView,'onClick','onHover');
func.onClick();
=>clicked:underscore


```

## 填充数据

> partial:
局部应用一个函数填充在任意个数的arguments，不改变其动态this值。和bind方法很相近。你可以传递_给arguments列表来指定一个不预先填充，但是在调用时提供的参数。
```javascript

var add = function(a,b){
	return a+b;
}
add5 = _.partial(add,5);
console.log(add5(10));
=>15

```

## 记忆函数

> `_.memoize(function,[hashFunction])`
记忆的真正的英文是`memorize`
memoize方法可以缓存某函数的计算结果。对于耗时较长的计算很有帮助的。
如果传递了hashFunction参数，就用hashFunction的返回key存储函数的计算结果。
hashFunction默认是是使用function的第一个参数作为key。memoized值的缓存可以作为函数的cache的属性。
```javascript

var fibonacci = _.memoize(function(n){
	return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
});

```

## delay 和 defer

> delay
在等待**毫秒之后调用函数，`类似setTimeout`
```javascript

var log = _.bind(console.log,console);
_.delay(log,1000,'sleep 1s');
=>sleep 1s

```
[_.bind用法](#bind)

> defer
延迟调用函数，直到当前调用栈被清空为止，跟使用setTimeout赋予0毫秒的延时很像。
对执行高消耗算法或大型html呈现而不阻碍ui更新线程很有用。
```javascript

_.defer(function(){
	console.log('deferred');
});
=>deferred

```

## after 和 before

> after
对`循环计数`，只有超过计数，才会调用指定的函数
```javascript

var nums = [1,2,3,4];
var renderNums = _.after(nums.length,function(){
	console.log('render nums');
});
_.each(nums,function(num){
	console.log('each:'+num);
	renderNums();
});
=>each:1
each:2
each:3
each:4
render nums

> before
```javascript

_.before(count,function)

```
创建一个函数，调用`不超过count次`。当count已经达到时候，最后一个函数调用结果将被记住并返回。
```javascript

var monthlyMeeting = _.before(3, askForRaise);
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();

```

## 函数传递

> wrap
```javascript

_.wrap(function,wrapper)

```
将一个函数function封装到`函数wrapper`里面，并把函数function作为第一个参数传给wrapper。这样可以让wrapper在function运行之前和之后执行代码，调整参数然后附有条件地执行。
```javascript

var hello = function(name){
	return 'hello:'+name;
};
hello = _.wrapper(hello,function(func){
	return 'before,'+func('moe')+',after';
});
hello();
=>'before, hello:moe,after'

```
