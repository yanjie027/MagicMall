/**
 * Created by Administrator on 2016/12/26 0026.
 */
function very(){
	var name = document.getElementById("name" ).value;
	var password = document.getElementById("psd" ).value;
	var login = document.getElementsByClassName("btn_login")[0];
	if(name =="" || password ==""){
		login.setAttribute("class","btn_login" );
	}else{
		login.setAttribute("class","btn_login active" );
		login.onclick=function(){
			location.href = '../my/logined.html';
		};
	}
}
setInterval(very,2000);
var reg = document.getElementsByClassName("btn-reg")[0]
reg.onclick = function(){
	location.href = "register.html"
}
var password = document.getElementsByClassName("btn-passwd")[0]
password.onclick = function(){
	location.href = "forget.html"
}