## 查找和过滤
### find
```bash

_.find(list,predicate,[context])

```
`predicate英文翻译成中文为断言（类似于assert）`
在list中逐项查找，返回 ｀第一个｀通过predicate迭代函数真值检测的元素值，如果没有值传递给测试迭代器将返回undefined。
如果找到匹配的元素，函数将立即返回，不会遍历整个list。

```bash

var even = _.find([1,2,3,4],function(num){
	return num % 2 ==0;
});
=>2

```

### filter
 
```bash

_.filter(list,predicate,[context])

```
遍历list中的每个值，返回包含`所有`通过predicate真值检测的元素值。
```bash

var evens = _.filter([1,2,3,4],function(num){
	return num % 2 == 0;
});
=>[2,4]

```

### where

```bash

_.where(list,properties)

```
遍历list中的每个值，返回一个数组，这个数组包含properties所有的`键-值对`。
```bash

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
