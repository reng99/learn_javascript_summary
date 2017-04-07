## 元素合并
### reduce
```bash

_.reduce(list,iteratee,[memo],[context])

```
reduce方法把list中元素归结为一个单独数值
`memo`是reduce函数的初始值，reduce的每一步都需要由iteratee返回。这个迭代传递四个参数：memo,value和迭代的index（或者key）和最后一个引用的整个list。
如果没有`memo`传递给reduce的初始调用，iteratee不会被列表中的第一个元素调用。第一个元素将取代传递给列表中下一个元素调用iteratee的memo参数。

```bash

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

