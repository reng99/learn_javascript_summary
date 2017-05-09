### getter的参数说明

- getter 可以传一个参数  , 比如下面:

```javascript

firstType(state) {
        return _.filter(state.type_list.list, function(obj){
            return obj.level === 1;
        });
    },

```
参数state指的是store中的state.js的数据。


- getter 可以传两个参数,比如下面

```javascript

firstType(state,getter) {
      console.log(getter);
        return _.filter(state.type_list.list, function(obj){
            return obj.level === 1;
        });
    },


```

第一个参数是store中的state.js的数据信息。
第二个参数是getter.js本身
