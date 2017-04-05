<h2>underscorejs中context参数用法</h2>
<p>例如:_.each(list,iteratee,[context]);</p>
<p>context为上下文，如果传递了context参数，则把iteratee绑定到context对象上</p>
<p>如果要修改iteratee调用对象为context，即函数中 this为context，就传递这个参数，否则为object window或者undefined</p>
<p>看下面的两个例子：</p>
<span style="background: #999;display: block; margin-bottom: 5px;">
	`
	var arr = [1,2,3];
	document.write(this);  //[object Window]
	var newArr = _.map(arr,function(item){
		document.write(this);//输出三次的 [object Window]
		return item*3;
	})
	document.write(newArr);//3,6,9
	document.write(arr); //object
	document.write(typeof newArr); //object
	`
</span>
<span style="background: #999;display: block; margin-top: 5px;margin-bottom: 5px;">
	`
	var arr = [1,2,3];
	document.write(this);  //[object Window]
	var newArr = _.map(arr,function(item){
		document.write(this);//输出三次的 1,2,3
		return item*3;
	},arr)  // <b>注意这里加了arr</b>
	document.write(newArr);//3,6,9
	`
</span>
<span style="background: #999;display: block; margin-top: 5px;">
	`
	var arr = [1,2,3];
	var otherArr = [4,5,6];
	document.write(this);  //[object Window]
	var newArr = _.map(arr,function(item){
		document.write(this);//输出三次的 4,5,6
		return item*3;
	},otherArr)  // <b>注意这里加了otherArr</b>
	document.write(newArr);//3,6,9
	`
</span>
<b>加上了context之后，this 的指向就发生了改变,添加了context之后，参数中的list的指向就发生了改变，变成了context对象，但是发生变化的还是原先的list，所以这里的newArr三次打印出来的值是不变的</b>
