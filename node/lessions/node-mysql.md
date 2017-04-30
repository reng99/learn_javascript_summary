## 数据库操作(CURD)

[CURD]

> 查询数据,插入数据,更新数据,删除数据

下面给出一个设定的数据库的例子

```javascript

var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'reng',
	password:'root',
	port:'3306',
	database:'test'
});

connection.connect();

var sql = "SELECT * FROM websites";
//查
connection.query(sql,function(err,result){
	if(err){
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}

	console.log('--SELECT--');
	console.log(result);
	console.log('----------');
});
connection.end();

//执行上面的代码会输出数据库reng内表websites的结果result

```
















