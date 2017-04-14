## 遍历
### _.each
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

### _.map
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