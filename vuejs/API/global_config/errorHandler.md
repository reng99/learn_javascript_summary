## errorHandler

- 类型 ： `Function`

- 默认值 ： 默认抛出错误

- 用法：

```javascript

	Vue.config.errorHandler = function(err,vm){
		//handle error
	}

```

指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时候，可获取错误信息和Vue实例。

[参考](https://cn.vuejs.org/v2/api/#errorHandler)