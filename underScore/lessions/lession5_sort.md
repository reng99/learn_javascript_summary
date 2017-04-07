## 排序
### sortBy 
```bash

_.sortBy(list,iteratee,[context])

```
返回一个排序后的list拷贝副本。如果传递iteratee参数，iteratee将作为list中每个值的排序的依据。迭代器也可以是字符串的属性名称进行排序的（比如length）。
```bash

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