// 跨浏览器的事件处理程序
var EventUtil ={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			//DOM2级
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			// IE
			element.attachEvent("on"+type,handler);
		}else{
			// DOM0级
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type] = null;
		}
	},
	getEvent:function(event){
		return event?event : window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	}
}



// 如果是要进行一个一个进行事件的触发的话，就要一个一个的添加事件，这样会有以下的缺点
// 首先，每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差
// 必须先指定所有的事件处理程序而导致dom的访问次数，会延迟整个页面的交互时间
// var item1 = document.getElementById("goSomewhere");
// EventUtil.addHandler(item1,"click",function(){
// 	console.log("GO SOMEWHERE");
// })
// var item2 =document.getElementById("doSomething");
// EventUtil.addHandler(item2,"click",function(){
// 	console.log("do something");
// })
// var item3 = document.getElementById("sayHi");
// EventUtil.addHandler(item3,"click",function(){
// 	console.log("say hi");
// })


// 事件委托
// 事件委托是利用了事件的冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。例如click事件
var list = document.getElementById("myLinks");
EventUtil.addHandler(list,"click",function(event){
	event=EventUtil.getEvent(event);
	var target =EventUtil.getTarget(event);
	switch(target.id){
		case "doSomething":
			console.log("do something");
			break;
		case "goSomewhere":
			console.log("go somewhere");
			break;
		case "sayHi":
			console.log("say hi");
			break;
	}
})









