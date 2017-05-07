## optionMergeStrategies 选项合并策略

- 类型 ： `{[key:string]:Function}`

- 默认值 ： `{}`

- 用法 ：

```

	Vue.config.optionMergeStrategies._my_option = function(parent,child,vm){
		return child + 1;
	}

	const Profile = Vue.extend({
		_my_option:1
		})
		//Profile.option._my_option = 2

```
自定义合并策略的选项。

合并策略选项分别接受第一个参数作为父实例，第二个参数为子实例，Vue实例上下文被作为第三个参数传入。

[来源](https://cn.vuejs.org/v2/api/#optionMergeStrategies)