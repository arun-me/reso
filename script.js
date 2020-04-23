var css1 = document.querySelector(".ht31");
var css2 = document.querySelector(".ht32");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var div = document.getElementB ("container");
var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");


button.addEventListener("click",function(){
	if(input.value.length > 0){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value="";
}
})
input.addEventListener("keypress",function(event){
	if(input.value.length > 0 && event.keycode===13) {
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value="";
}})
function setGradient() {
	div.style.background = 
	"linear-gradient(to right,"+ color1.value + ", "+ color2.value + ")";
	css1.textContent = div.style.background + ";";
}
function setBackground(){
	div.style.background-color = ""color3.value";";
	css2.textContent = div.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setBackgroun);