## 对象的指向问题

```javascript
eg:
	放两个案例应该就明白了

	//错误案例
	var obj = {name:"rengjia",arr:[1,2,3,4,5,6,8]};
	var newObj = obj ;
	newObj.arr=newObj.arr.filter(function(item){return item%2==0});
	console.log(obj);console.log(newObj);

	得到的结果是:Object {name: "rengjia", arr: Array[4]}
	得到的结果是:Object {name: "rengjia", arr: Array[4]}
	两个的结果是一样的，出现这种状况的原因是，对象存储是指向同一个内存的。


	//正确的案例
	新建一个对象
	var obj = {name:"rengjia",arr:[1,2,3,4,5,6,8]};
	var newObj = {} ;
	newObj.arr=obj.arr.filter(function(item){
	    return item%2==0;
	});
	console.log(obj);
	console.log(newObj);

	得到的结果：Object {name: "rengjia", arr: Array[7]}
	得到的结果：Object {arr: Array[4]}

```