## 异步中的 setTimeout 和 setInterval

```

两段代码的比较：
第一段代码：
function fn(){
	for(var i =0;i<=3;i++){
		function(){
			var backup=i;
			setTimeout(function(){
				console.log(backup);
			},2000);
		}
	}
}
fn();
将输出的结果是：
	过了两秒钟之后，立马输出0，1，2，3


第二段代码：
function fn(){
	for(var i =0;i<=3;i++){
		var backup = i ;
		setTimeout(function(){
			console.log(backup);
		},2000);
	}
}
fn();
将输出的结果是：
	过了两秒钟之后，立马输出3，3，3，3

```
