## actions.js中的传参

actions.js中传递的参数是根据在.vue页面中派发(dispatch)事件传递的参数决定的

- 一个参数的情况

当.vue页面中只是派发了事件的名称的话，在相应的actions事件中只传递一个对象作为参数。

```javascript

//.vue 中
store.dispatch('changeCurrentPosition');

//actions.js中
import * as types from './mutation-types.js'
export const changeCurrentPosition = ({commit,state})=>{
  //方便查看commit是什么，这里进行输出
  console.log(commit);
  //得到的结果如下
  //function boundCommit(type, payload, options) {
	//    return commit.call(store, type, payload, options)
	// }

  //actions.js中指派产生Mutation的变化
  commit(types.CHANGE_CURRENT_POSITION);
}

```

- 两个参数的情况

当.vue页面中派发了事件的名称，也传递参数的话（一般以对象{}的形式）。参考下面的例子:

```javascript

//.vue文件中
store.dispatch('changeCurrentPosition',{name:'reng'});

//在actions.js中
import * as types from './mutation-types.js'
export const changeCurrentPosition = ({commit,state},obj)=>{
  //方便查看commit是什么，这里进行输出
  console.log(commit);
  //得到的结果如下
  //function boundCommit(type, payload, options) {
	//    return commit.call(store, type, payload, options)
	// }

  //为了方便查看传过来的obj是啥，这里进行输出
  console.log(obj);
  //{name:'reng'}

  //actions.js中指派产生Mutation的变化
  commit(types.CHANGE_CURRENT_POSITION,obj);
}

```
