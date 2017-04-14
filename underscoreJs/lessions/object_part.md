# 对象部分

## keys 和 values

> keys
`_.key(object)`
检索object拥有的所有可枚举属性的名称。
```javascript

_.keys({one:1,two:2,three:3});
=>['one','two','three']

```

> allKeys
`_allKeys(object)`
检索object拥有的和继承的所有属性的名称。
```javascript

function Stooge(name){
	this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge('moe'));
->['name','silly']

```

> values
`_.values(object)`
返回object对象所有的属性值。
```javascript

_.values({one:1,two:2,three:3});
=>[1,2,3]

```

## 对象遍历

> mapObject
`_.mapObject(object,iteratee,[context])`
它类似于map,但是这用于对象。转换每个属性的值。
```javascript

_.mapObject({start:5,end:12},function(val,key){
	return val + 5;
});
=>{start:10,end:17}

```

## 转换和对调

> pairs
`pairs(object)`
把一个对象转变成为一个`[key,value]`形式的数组。
```javascript

_.pairs({one:1,two:2,three:3});
=>[['one',1],['two',2],['three',3]]

```

> invert
`_.invert(object)`
invert(转换),返回的是一个object的副本，使其键(keys)和值(values)对话。对于这个操作，必须保证object里面所有的值都是`唯一的并且可以序列号成字符串`.
```javascript

_.invert({moe:'moese',larray:'louis',curly:'jerome'});
=>{moese:'moe',loius:'larray',jerome:'curly'};

```

## 复制

> extend
复制对象的所有属性到目标对象上，`覆盖`已有属性。
```javascript

console.log(
		_.extend({name:'moe'},{age:50})
);
=>{name:'moe',age:50};

```

>defaults
复制对象的所有属性到目标对象上，`跳过`已有属性。
```javascript

var iceCream = {flavor:'chocolate'};
console.log(
		_.defaults(iceCream,{flavor:"vanilla"},{sprinkles:'lots'})
);
=>{flavor:'vanillar',sprinkles:'lots'}

//顺便长下知识，flavor(风味，香料),vanilla(香草),sprinkles(洒,零星)

```

> clone
创建 一个浅复制（浅拷贝）的克隆object。`clone对象，不进行复制`
```javascript

console.log(
		_.clone({name:'moe'});
);
=>{name:'moe'};

//平时的复制
eg:
		var origin = {name:'reng'};
		var copy = origin;
		console.log(copy === origin);
		=>true
		//因为指向了同一个内存

//使用clone
eg:
		var origin = {name:'reng'};
		var clone = _.clone(origin);
		console.log(clone == origin);
		=>false

//补充一下
'=='是值相等就为true,而'==='是类型和值都要相等,'==='比'=='严格

```

## tap(采用)
`_tap(object,interceptor)`
interceptor(拦截)
用object作为参数来调用函数interceptor,然后返回object。这种方法的主要意图是
作为函数链式调用的一环，为了对此对象执行操作并返回对象本身。
```javascript

console.log(
		_.chain([1,2,3,200])
				.filter(function(num){return num % 2 == 0})
				.tap(alert)
				.map(function(num){return num * num})
				.value()
);
=>[2,200]//alerted
[4,40000]//consoled

```

## 比较
`-.isEqual(object,other)`
执行`两个对象之间的优化深度比较`，确定它们是否应该被视为相等。
```javascript

var stooge = {name:'moe',luckyNumbers:[13,27,34]};
var clone = {name:'moe',luckyNumbers:[13,27,34]};
stooge == clone;
=>false
_.isEqual(stooge,clone);
=>true

```


















