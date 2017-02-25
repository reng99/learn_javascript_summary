function setFontColor(obj) 
{ 
document.execCommand("forecolor",false,obj.value); 
console.log(document.getElementById("editableText").innerHTML);
} 

function setFontStyle(obj){
	document.execCommand(obj.value,false,null);
}

