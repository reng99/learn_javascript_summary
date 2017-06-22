## 理解attr_pros

事实上。attr()和.prop()的不同，是HTML属性（HTML attributes）和DOM属性（DOM properties）的不同。HTML属性解析的是HTML代码中的存在的属性，返回的总是字符串，而DOM属性解析的是DOM对象的属性，可能是字符串，也可能是一个对象，可能与HTML属性相同，也可能不同。