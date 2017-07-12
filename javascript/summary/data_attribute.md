## 关于在元素中取data attribute的值

相关的.html文件中的代码

```html

...
<div id = "reng" data-number-value = "123">div<div>
...

```

相关的.js文件

```javascript

var div = document.getElementById("reng");
console.log(div.dataset.numberValue);//⚠️dataset.numberValue

```

运行上面的.html文件，在浏览器的控制台上面可以查看输出`123`。