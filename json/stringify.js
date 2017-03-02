// json对象的两个方法之一stringify()
var book ={
	title:"rengjia",
	authors:['reng','ming'],
	edition:3,
	year:2011
};
var jsonText = JSON.stringify(book);
console.log(jsonText);
// 输出   {"title":"rengjia","authors":["reng","ming"],"edition":3,"year":2011}
// 作用，是把javascript对象序列化成为JSON字符串

console.log(typeof jsonText);
// 这里输出的类型是string

//stringify()序列化可以传三个参数，第二参数是一个过滤器，可以传一个数组
// 或者一个函数
var secondParaText = JSON.stringify(book,['title','year']);

console.log(secondParaText);
// 输出的结果是{"title":"rengjia","year":2011}

var secondParaTextFun = JSON.stringify(book,function(key,value){
	switch(key){
		case "title":
			return "come on";
		case "authors":
			return value.join(",");
		default://default是不能够落下的
			return value;
	}
});
console.log(secondParaTextFun);
// 输出的结果是{"title":"come on","authors":"reng,ming","edition":3,"year":2011}


//第三个参数是用于控制结果中的缩进和空白符。



