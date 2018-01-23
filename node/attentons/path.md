## path 的要点

### path.resolve(from,to)

这个是将相对路径转换成绝对路径,demo如下：

```javascript
path.resolve('reng/name','../jia');
// reng/jia
```
### path.join(from,to)

类似`path.resolve`，将片段的路径拼接:

```javascript
path.join('reng/name','../jia');
// reng/jia
```
