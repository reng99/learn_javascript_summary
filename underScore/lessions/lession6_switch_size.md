## 转换和获取个数
### toArray
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

### size
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
