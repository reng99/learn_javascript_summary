# 使用功能部分

## 更改命名空间
underscore默认使用`_(下划线)`来访问和创建对象，但是这个名字可能不符合我们的命名的规范，或容易引起命名冲突。
我们可以通过noConflict()方法来改变underscore的命名，并恢复_（下划线）变量之前的值，例如：
```javascript

//underscore对象
console.dir(_);

//将underscore对象重命名为us，后面都通过us来访问和创建underscore对象
var us = _.noConfict();

//输出自定义的变量_
console.dir(_)

```

## 随机数
返回一个`min 和 max`之间的随机整数。如果你只传递一个参数，那么返回0和这个参数之间的整数。
```javascript

_.random(0,100)
=>12

```

## 唯一id
`_.uniqueId([prefix])`
为需要的客户端模型或者dom元素生成一个`全局唯一的ID`。如果prefix（前缀）参数存在，id将附加给它。
```javascript

_.uniqueId('contact_');
=>'contact_104'

```

## 扩展
`_.mixin(object)`
允许用您自己的实用程序函数扩展underscore。传递一个{name:function}定义的哈希添加到underscore对象，以及面向对象封装。
```javascript

_.mixin({
	capitalize:function(string){
		return string.chatAt(0).toUpperCase()+string.substring(1).toLowerCase();
	}
});
console.log(_('fabio').capitalize());
=>Fabio

```

## 返回属性值
`_.result(object,property,[defaultValue])`
如果指定的property的值是一个函数，那么将在object上下文内调用它；否则，返回它。
如果提供默认值，并且属性不存在，那么默认值将被返回。如果设置defaultValue是一个函数，它的结果将被返回。
```javascript

var object = {cheese:'crumpets',stuff:function(){
	return 'nonsense';
}};

_.result(object,'cheese');
=>'crumpets'

_.result(object,'stuff');
=>'nonsense'

_.result(object,'meat','ham');
=>'ham'

```

[返回underscore目录](../index.md)