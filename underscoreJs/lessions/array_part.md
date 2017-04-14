# 数组部分
## 元素位置操作
> first
```javascript

_.first(array,[n])

```
返回array的第一个元素。传递n参数将返回数组中从第一元素开始的n个元素。
```javascript

_.first([5,4,3,2,1]);
=>5

_.first([5,4,3,2,1],2);
=>5,4

```

> initial
```javascript

_.initial(array,[n]);

```
返回数组中`除了最后一个元素外`的其他全部元素。在arguments对象上特别有用。传递n参数将从结果中排除从最后一个开始的n个元素。
```javascript

_.initial([5,4,3,2,1]);
=>[5,4,3,2]

_.initial([5,4,6,2,1],3);
=>[5,4]

```

> last
```javascript

_.last(array,[n]);

```
返回array的最后一个元素。传递n参数将返回数组中从最后一个元素开始的n个元素。

```javascript

_.last([5,4,3,2,1]);
=>1

_.last([5,4,3,2,1],3);
=>3,2,1

```

> rest
```javascript

_.rest(array,[index])

```
返回数组中除了第一个元素外的其他全部元素。传递index参数将返回从index开始的剩余所有元素。
```javascript

_.rest([5,4,3,2,1]);
=>[4,3,2,1]

_.rest([5,4,3,2,1],2);
=>[3,2,1]

```

## 获取索引位置
> indexOf 
```javascript

_.indexOf(array,value,[isSorted])

```
返回value在该函数的索引值，如果value不存在array中就返回-1。使用原生的indexOf函数，除非它失效。
如果您正在使用一个大数组，你知道数组已经排序。传递true给isSorted将更快的用二进制进行搜索，或者，传递一个数字作为第三个参数，为了在给定的索引的数组中寻找第一个匹配值。
```javascript

_.indexOf([1,2,3],2);
=>1

```
> lastIndexOf
```javascript

_.lastIndexOf(list,value,[fromIndex])

```
返回value在该array中的从最后开始的索引值，如果value不存在arrau中就返回-1。
如果支持原生的lastIndexOf,将使用原生的lastIndexOf函数。传递fromIndex将从你给定的作引值开始搜索。
```javascript

_.lastIndexOf([1,2,3,1,2,3],2);
=>4

_.lastIndexOf([1,2,3,1,2,3],2,3);
=>1

```

> sortedIndex
```javascript

_sortedIndex(list,value,[iteratee],[context])

```
使用二分查找确定value在list中的位置序号，value按此序号插入保持list原有的序列。
如果提供iteratee函数，iteratee将作为list排序的依据，包括你传递的value。
iteratee也可以是字符串的属性名涌来排序（比如length）。
```javascript

_.sortedIndex([10,20,30,40,50,60],35);
=>3

var stooges =[
	{name:'moe',age:40},
	{name:'curly',age:60}
];
_sortedIndex(stooges,{name:'larray',age:50},'age');
=>1

```

##  去除空值和嵌套
> compact  `compact(简洁)`
```javascript

_.compact(array)

```
返回一个除去所有false值的`array副本`。在javascript中，`false,null,0,'',undefined和NAN都是false值`
```javascript

_.compact([0,1,false,2,'',3]);
=>[1,2,3]

```

> flatten  `flatten(夷平)`
```javascript

_.flatten(array,[shallow])

```
将一个嵌套多层的数组array（嵌套可以是任意层数）转换为只有一层的数组。`如果你传递shallow参数，数组将只减少一维的嵌套`。
```javascript

_.flatten([1,[2],[3,[[4]]]]);
=>[1,2,3,4];

_flatten([1,[2],[3,[[4]]]],true);
=>[1,2,3,[[4]]

```

## 元素位置操作
> range
```javascript

_.range([start],stop,[step])

```
一个用来创建整数灵活编号的列表的函数，便于each和map循环。
如果省略start则默认是0；step默认为1，返回一个从start到stop的整数的列表，用steo来增加（或者减少）。
值得注意的是，如果stop值在start前面（也就是stop的值小于start值），那么值域会被认为是零长度，而不是负增长。如果你要一个负数的值域，请使用负数step。
```javascript

_.range(10);
=>[0,1,2,3,4,5,6,7,8,9]

_.range(1,11);
=>[1,2,3,4,5,6,7,8,9,10]

_.range(0,30,5);
=>[0,5,10,15,20,25]

_.range(0,-10,-1);
=>[0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

_.range(0);
=>[]

```

## 合并和转换
> zip  （zip 压缩）
```javascript

_.zip(*arrays)

```
将每个数组arrays中对应的位置合并在一起。在合并分开保存的数据时很有用。如果你用来处理矩阵嵌套数组时候，_.zip.apply可以做类似的效果。
```javascript

_.zip(['moe','larry','curly'],[30,40,50],[true,true,false]);
=>[['moe',30,true],['larry',40,true],['curly',50,false]]

```

> object
```javascript

_.object(list,[values])

```
将数组转换成为对象。传递任何一个单独[key,value]对的列表，或者一个键的列表和一个值的列表。如果存在重复的键，最后一个值将被返回`也就是前面的值被覆盖`。
```javascript

_.object(['moe','larry','curly'],[30,40,50]);
=>{moe:30,larry:40,curly:50}

_.object([['moe',30],['larry',40],['curly',50]]);
=>{moe:30,larry:40,curly:50}

```