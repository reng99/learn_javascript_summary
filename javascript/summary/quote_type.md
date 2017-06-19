## 引用类型 

在ECMAScript中，`引用类型`是一种数据结构，用于将数据和功能组织起来。它也常被称为`类`，但是这种称呼是不正确的。尽管ECMAScript从技术上讲是一门面向对象的语言，但是它不具备传统的面向对象语言所支持的类和借口等基本结构（接触过java等面向对象语言就知道了）。引用类型有时候也被称为`对象定义`，因为它们描述的是一类对象所具有的属性和方法。:blush:

### 访问对象属性方法

```javascript

var Person = {
    name:"reng",
    age:10
}
var person = new Person();

```

1、通过使用点来访问

`ex：alert(person.name)`

2、通过方括号来访问

`ex:alert(person["name"])`

使用方括号来访问的主要优点是可以通过变量来访问属性。例如
```javascript

var propertyName = "name";
alert(person[propertyName]);//reng

```
