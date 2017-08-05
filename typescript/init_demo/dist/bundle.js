(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "reng jia ming ");
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size 10 object reng" };
printLabel(myObj);

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVc7SUFDaEMsTUFBTSxDQUFDLGdCQUFjLElBQU0sQ0FBQTtBQUMvQixDQUFDO0FBRkQsNEJBRUM7QUFBQSxDQUFDOzs7OztBQ0ZGLGlDQUFtQztBQUVuQyxtQkFBbUIsT0FBYyxFQUFDLElBQVc7SUFDekMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUt2QyxvQkFBb0IsV0FBeUI7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELElBQUksS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMscUJBQXFCLEVBQUMsQ0FBQztBQUVsRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6c3RyaW5nKXtcbiAgICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWBcbn07IiwiaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTpzdHJpbmcsbmFtZTpzdHJpbmcpe1xuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcbn1cblxuc2hvd0hlbGxvKFwiZ3JlZXRpbmdcIixcInJlbmcgamlhIG1pbmcgXCIpO1xuXG5pbnRlcmZhY2UgTGFiZWxsZWRWYWx1ZSB7XG4gICAgbGFiZWw6c3RyaW5nO1xufVxuZnVuY3Rpb24gcHJpbnRMYWJlbChsYWJlbGxlZE9iajpMYWJlbGxlZFZhbHVlKXtcbiAgICBjb25zb2xlLmxvZyhsYWJlbGxlZE9iai5sYWJlbCk7XG59XG5cbmxldCBteU9iaiA9IHtzaXplOjEwLGxhYmVsOlwic2l6ZSAxMCBvYmplY3QgcmVuZ1wifTtcblxucHJpbnRMYWJlbChteU9iaik7XG4iXX0=
