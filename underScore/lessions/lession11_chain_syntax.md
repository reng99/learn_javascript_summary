# 链式语法

<a id="value"></a>
## chain
`_.chain(obj)`
链式操作写起来非常顺畅，代码也会非常语义化。可以参考下jquery。
underscore.js中也支持将代码写成链式的，API为chain,chain返回的是一个`包装过的underscore对象`，到链式结束的时候，`需要调用value来获取最终的结果`。
```bash

eg:
	var stooges = [
		{name:'curly',age:20},
		{name:'moe',age:21},
		{name:'larry',age:22}
	];
	var youngest = _.chain(stooges)
					.sortBy(function(stooge){return stooge.age;})
					.map(function(stooge){return stooge.name+'is'+stooge.age;})
					.first()
					.value();
	=>'curly is 20'

```

## value
`_(obj).value()`
获取封装对象的最终值。
```bash

_([1,2,3]).value();
=>[1,2,3]

```
[详细可参考chain中的例子](#value)
