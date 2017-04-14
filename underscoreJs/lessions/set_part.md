# 集合部分（数组或对象）

## 遍历
> _.each
```javascript

_.each(list,iteratee,[context])


```
如果不是很理解content,可以参考下[question0_context_argument.md](../questions/question0_context_argument.md)这篇文章

遍历list中的所有的元素,按照顺序用遍历输出每个元素,如果传递了context参数，则把iteratee绑定到context对象上。
每次调用iteratee都会传递三个参数：(element,index,list)。如果List是javascript对象，iteratee的参数就是(value,key,list)。返回list以方便链式调用。

```javascript

_.each([1,2,3],alert);
=>alert each numbere in turn...

_.each({one:1,two:2,three:3},alert);
=>alert each number value in turn

```

注意：集合函数能够在`数组，对象，和类数组对象`，比如arguments，nodelist和类似的数据类型上正常工作。
但是它通过鸭子类型工作，所以要避免传递一个不固定length属性的对象。每个循环不能被破坏打破，通过使用`_.find`代替，是一个好的idea。

> _.map
``` javascript 

_map(list,iteratee,[context])

```
通过转换函数(iteratee迭代器)映射列表中的每个值产生价值的新数组
iteratee传递三个参数:value,然后是迭代的index,最后一个是引用指向整个List。
``` javascript

_.map([1,2,3],function(num){return num*3});
=>[3,6,9]

_.map({one:1,two:2,three:3},function(num,key){return num*3});
=>[3,6,9]

_.map([[1,2],[3,4]],_.first);
=>[1,3]

```

## 元素合并
> reduce
```javascript

_.reduce(list,iteratee,[memo],[context])

```
reduce方法把list中元素归结为一个单独数值
`memo`是reduce函数的初始值，reduce的每一步都需要由iteratee返回。这个迭代传递四个参数：memo,value和迭代的index（或者key）和最后一个引用的整个list。
如果没有`memo`传递给reduce的初始调用，iteratee不会被列表中的第一个元素调用。第一个元素将取代传递给列表中下一个元素调用iteratee的memo参数。

```javascript

var sum = _.reduce([1,2,3],function(memo,num){
	return memo + num;
});
=>6

//上面的代码等同于下面这个

var sum = _.reduce([1,2,3],function(memo,num){
	return memo + num;
},0);
=>6

var sum = _.reduce([1,2,3],function(memo,num){
	return memo + num;
},3);
=>9

```

## 查找和过滤
> find
```javascript

_.find(list,predicate,[context])

```
`predicate英文翻译成中文为断言（类似于assert）`
在list中逐项查找，返回 ｀第一个｀通过predicate迭代函数真值检测的元素值，如果没有值传递给测试迭代器将返回undefined。
如果找到匹配的元素，函数将立即返回，不会遍历整个list。

```javascript

var even = _.find([1,2,3,4],function(num){
	return num % 2 ==0;
});
=>2

```

> filter
 
```javascript

_.filter(list,predicate,[context])

```
遍历list中的每个值，返回包含`所有`通过predicate真值检测的元素值。
```javascript

var evens = _.filter([1,2,3,4],function(num){
	return num % 2 == 0;
});
=>[2,4]

```

> where

```javascript

_.where(list,properties)

```
遍历list中的每个值，返回一个数组，这个数组包含properties所有的`键-值对`。
```javascript

var list = [
	{title:'aaa',year:1980},
	{title:'bbb',year:1981},
	{title:'ccc',year:1982}
];
console.log(
	_.where(list,{year:1982})
);
=>[{title:'ccc',year:1982}]

```

## 判断和提取
> contains

```javascript

_.contains(list,value,[fromIndex])

```
判断元素是否在list中，如果list中包含指定的value则返回true（使用===检测）。如果list是数组，内部使用indexOf判断。使用fromIndex来给定开始检索的位置。
```javascript

_.contains([1,2,3],3);
=>true

上面的等同下面一个

_.contains([1,2,3],3,0);
=>true

```

> pluck
```javascript

_.pluck(list,propertyName)

```
提取一个集合中指定的属性值，pluck也许是map中最常使用的用例模型的简化版本，即萃取数组对象中某属性值，返回一个数组。

```javascript

var stooges = [
	{name:'moe',age:80},
	{name:'larry',age:90},
	{name:'curly',age:80}
];
_.pluck(stooges,'name');
=>['moe','larry','curly']

```
`因为备注stooge是‘奴才’的意思`

> 判断最大值和最小值
> max (最大值)
```javascript

_.max(list,[iteratee],[context])

```
返回list中最大值。如果传递iteratee参数,iteratee将作为list中每个值的排序依据。如果list为空，返回-infinity，所以你可能需要事先用isEmpty检查list。

```javascript

_.max([1,2,3]);
=>3

_.max();
=>-Infinity

var stooges = [
	{name:'moe',age:40},
	{name:'larry',age:50},
	{name:'curly',age:60}
];
_.max(stooges,function(stooge){
	return stooge.age;
});
=>{name:'curly',age:60}

```

> min (最小值)

```javascript

_.min(list,[iteratee],[context])

```
返回list中的最小值。如果传递iteratee参数，iteratee将作为list中的每个值的排序依据。如果list为空，将返回-Inifity(参考上面的max中的相关代码)，所以你可能需要先用isEmpty检查list。
```javascript

var numbers = [10,5,100,2,1000];
_.min(numbers);
=>2

var stooges = [
	{name:'moe',age:40},
	{name:'larry',age:50},
	{name:'curly',age:60}
];
_.min(stooges,function(stooge){
	return stooge.age;
});
=>{name:'moe',age:40}

```

## 排序
> sortBy 
```javascript

_.sortBy(list,iteratee,[context])

```
返回一个排序后的list拷贝副本。如果传递iteratee参数，iteratee将作为list中每个值的排序的依据。迭代器也可以是字符串的属性名称进行排序的（比如length）。
```javascript

_.sort([3,1,5]);
=>[1,3,5]  //默认是从小到大的排序

_.sortBy([1,2,3,4,5,6],function(num){
return Math.sin(num);
});
=>[5,4,6,3,1,2]

var stooges = [
	{name:'moe',age:40},
	{name:'larry',age:50},
	{name:'curly',age:60}
];
_.sortBy(stooges,'name');
=>[
	{name:'curly',age:60},
	{name:'larry',age:50},
	{name:'moe',age:40}
]

```

## 转换和获取个数
> toArray
```javascript

_.toArray(list)

```
把list（任何可以迭代的对象）转换成为一个数组，在转换`arguments`对象时非常有用。
```javascript

(function(){
	return _.toArray(arguments).slice(1);
})(1,2,3,4);
=>[2,3,4]

题外话--slice()
arrayObject.slice(start,end);
start  是必须的，规定从开始选取。如果是负数，那么它规定从数组的尾部开始算起的位置。也就是说，-1指最后一个元素，-2指倒数第二个元素，一次类推。
end 可选，规定从何处选取。该参数是数组片段结束处的数组的下标。
[包含begin,不包含end]

(function(){
	return _.toArray(arguments).slice(1,2);
})(1,2,3,4);
=>[2]

```

> size
```javascript

_.size(list)

```
返回list的长度
```javascript

_.size([2,3,4]);
=>3

_.size({one:1,two:2});
=>2

```

