## 数据库操作(CURD)

[CURD](../questions/curd.md)

> 查询数据

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


> 插入数据

下面给出一个设定的数据库的例子test.js

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

var addSql = 'INSERT INTO website(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具','https://c.runoob.com','23453','CN'];
//增
connection.query(addSql,addSqlParams,function(err,result){
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}

	console.log('--INSERT--');
	console.log('INSERT ID :',result);
	console.log('----------');

});

connection.end();

```

执行上面的命令输出结果为：

```javascript

$ node test.js
--INSERT--
INSERT ID: OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 6,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
----------

```

执行成功后，查看数据表，即可以看到添加的数据:

<img src="../dist/imgs/addSql.jpg">


> 更新数据

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

var modSql = 'UPDATE website SET name = ?,url=?WHERE Id =?';
var modSqlParams = ['菜鸟移动站'，'https://m.runoob.com',6];

//改 
connection.query(modSql,modSqlParams,function(err,result){
	if(err){
		console.log('[UPDATE ERROR] - ',err.message);
		return;
	}
	console.log('--UPDATE--');
	console.log('UPDATE affectedRows ',result.affectedRows);
	console.log('----------');
});

connection.end();

```

执行上面的命令输出的结果如下
```javascript

--UPDATE--
UPDATE affectedRows 1
----------

```

 执行成功之后，查看数据表，即可以看到更新的数据:


<img src="../dist/imgs/modSql.jpg">


> 删除数据

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

var delSql = 'DELETE FROM websites WHERE id = 6';

//删
connection.query(delSql,function(err,result){
	if(err){
		console.log('[DELETE ERROR] - ',err.message);
		return;
	}
	console.log('--DELETE--');
	console.log('DELETE affectedRows ',result.affectedRows);
	console.log('----------');
});

connection.end();

```

执行输入下面的结果：
```javascript

--DELETE--
DELETE affectedRows 1
----------

```

执行成功后，查看数据表，就可以看到id=6的数据已经被删除了：

<img src="../dist.imgs/delSql.jpg">


[数据库mysql学习](http://www.runoob.com/mysql/mysql-tutorial.html)













