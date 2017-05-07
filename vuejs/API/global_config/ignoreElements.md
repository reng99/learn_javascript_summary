## ignoreElements

- 类型 ： `Array<string>`

- 默认值 ： `[]`

- 用法：

```javascript

	Vue.config.ignoredElements = [
		'my-custom-web-component','another-web-component'
	]

```

须使Vue忽略在Vue之外的自定义元素（eg.,使用了Web Components APIs）。否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于`unknown custom element`的警告⚠️

[参考](https://cn.vuejs.org/v2/api/#ignoredElements)