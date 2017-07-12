## 正则表达式要点

使用链接；https://c.runoob.com/front-end/854

- `runoo+b`

可以匹配 runoob、runooob、runoooooob 等，+ 号代表前面的字符必须至少出现一次（1次或多次）。

- `runoo*b`

可以匹配 runob、runoob、runoooooob 等，* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。

- `colou?r`

可以匹配 color 或者 colour，? 问号代表前面的字符最多只可以出现一次（0次、或1次）。

- `.`

匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。

- `\b`

匹配一个字边界，即字与空格间的位置。

```javascript
eg:

var str = "this is my name ";
var pattern = /\bis\b/g;
console.log(str.match(pattern)[0]);//is
//attention: 'this' is not included

```

- `^`

匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 ^ 字符本身，请使用 \^。

```javascript
eg:

var str = "http://www.runoob.com:80/html/html-tutorial.html";
var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
arr = str.match(patt1);
for (var i = 0; i < arr.length ; i++) {
    document.write(arr[i]);
	document.write("<br>");
}

//相关的说明
//第一个括号子表达式捕获 Web 地址的协议部分。该子表达式匹配在冒号和两个正斜杠前面的任何单词。
//第二个括号子表达式捕获地址的域地址部分。子表达式匹配 / 和 : 之外的一个或多个字符。
//第三个括号子表达式捕获端口号（如果指定了的话）。该子表达式匹配冒号后面的零个或多个数字。只能重复一次该子表达式。
//最后，第四个括号子表达式捕获 Web 地址指定的路径和 / 或页信息。该子表达式能匹配不包括 # 或空格字符的任何字符序列。
//将正则表达式应用到上面的 URI，各子匹配项包含下面的内容：
//第一个括号子表达式包含"http"
//第二个括号子表达式包含"www.runoob.com"
//第三个括号子表达式包含":80"
//第四个括号子表达式包含"/html/html-tutorial.html"

//相关的输出
// http://www.runoob.com:80/html/html-tutorial.html
// http
// www.runoob.com
// :80
// /html/html-tutorial.html

```

- `?:`表示不捕获这个分组

说明一下正则表达式中圆括号中的内容表示分组,从左到右按左圆括号'('的顺序依次为分组1,2....,9。当使用(?:)表示此圆括号中的内容不计入以上1,2...9的捕获分组中。

```bash
eg:

(?:pattern)

匹配pattern但不获取匹配的子字符串，也就是说这是一个非获取匹配，不存储匹配的子字符串用于向后引用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。

```