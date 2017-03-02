// 这是JSON对象的两个重要的方法之一parse(),方法和之前介绍的方法stringify（）相反
var book ={
	title:"rengjia",
	authors:['reng','ming'],
	edition:3,
	year:2011,
	releaseDate: new Date(2011,11,1)
};
var jsonText = JSON.stringify(book);

var parseText = JSON.parse(jsonText);

console.log(parseText);

// 输出的内容是
//{ title: 'rengjia',
//authors: [ 'reng', 'ming' ],
//edition: 3,
//year: 2011 }

console.log(typeof parseText);
// 输出的类型是object

// parse（）接受两个参数，第二个参数是还原函数（函数接受两个参数，键值）
var bookCopy = JSON.parse(jsonText,function(key,value){
	if(key=="releaseDate"){
		return new Date();
	}else{
		return value;
	}
})

console.log(bookCopy.releaseDate.getFullYear());
// 输出2017
