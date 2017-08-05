"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(compiler) {
    console.log("hello from " + compiler);
}
hello("typescript");
var greet_1 = require("./greet");
console.log(greet_1.sayHello("typescript"));
