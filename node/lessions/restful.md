## restful接口

users.json

```json
{
    "user1" : {
       "name" : "mahesh",
       "password" : "password1",
       "profession" : "teacher",
       "id": 1
    },
    "user2" : {
       "name" : "suresh",
       "password" : "password2",
       "profession" : "librarian",
       "id": 2
    },
    "user3" : {
       "name" : "ramesh",
       "password" : "password3",
       "profession" : "clerk",
       "id": 3
    }
 }
```

index.js

```javascript
var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

 // 得到用户的列表
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// 删除用户
app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];
        
        console.log( data );
        res.end( JSON.stringify(data));
    });
 })

//添加的新用户数据
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 
 // 添加新用户
 app.get('/addUser', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
 })

// 显示用户详情
app.get('/:id',function(req , res){
    fs.readFile(__dirname + "/" + "users.json", "utf8" , function (err , data){
        data = JSON.parse(data);
        var user = data["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    })
})


 

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
```

运行查看`localhost:8081`

