import { sayHello } from "./greet";

function showHello(divName:string,name:string){
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting","reng jia ming ");

interface LabelledValue {
    label:string;
}
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObj = {size:10,label:"size 10 object reng"};

printLabel(myObj);
