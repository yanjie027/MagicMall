/**
 * Created by Administrator on 2016/12/26 0026.
 */
var setting_b = document.getElementsByClassName("setting_btn")[0];
var circle = document.getElementById("circle");
setting_b.addEventListener("click",function(){
	if(circle.className=="active"){
		circle.setAttribute( "class", "setting_circle" );
	}else{
		circle.setAttribute( "class", "active" );
	}
})
var right_icon = document.getElementsByClassName("right_icon")[0]
right_icon.onclick = function(){
	location.href = "setting_about.html"
}
var clear = document.getElementById("clear")
var gob = document.getElementsByClassName("gob")[0]
clear.onclick = function(){
	gob.setAttribute("class","gob active")
}
var cancel = document.getElementsByClassName("box_bottom_left")[0]
cancel.onclick = function(){
	gob.setAttribute("class","gob")
}
var confirm = document.getElementsByClassName("box_bottom_right")[0]
confirm.onclick = function(){
	var memory_data = document.getElementsByClassName("memory_data")[0]
	memory_data.innerText = 0
	gob.setAttribute("class","gob")
}
var back = document.getElementsByTagName("li")[3]
back.onclick = function(){
	location.href = "unlogin.html"
}