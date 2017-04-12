# 对象部分

## keys 和 values

### keys
`_.key(object)`
检索object拥有的所有可枚举属性的名称。
```bash

_.keys({one:1,two:2,three:3});
=>['one','two','three']

```

### allKeys
`_allKeys(object)`
检索object拥有的和继承的所有属性的名称。
```bash

function Stooge(name){
	this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge('moe'));
->['name','silly']

```

### values
`_.values(object)`
返回object对象所有的属性值。
```bash

_.values({one:1,two:2,three:3});
=>[1,2,3]

```

## 对象遍历

### mapObject
`_.mapObject(object,iteratee,[context])`
它类似于map,但是这用于对象。转换每个属性的值。
```bash

_.mapObject({start:5,end:12},function(val,key){
	return val + 5;
});
=>{start:10,end:17}

```

## 转换和对调









