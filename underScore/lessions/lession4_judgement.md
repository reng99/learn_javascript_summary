## 判断和提取
### contains

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

### pluck
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

## 判断最大值和最小值
### max
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

### min

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


