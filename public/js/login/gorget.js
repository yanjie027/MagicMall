/**
 * Created by Administrator on 2016/12/26 0026.
 */
function test(){
	var name=document.getElementById("name" ).value;
	var password = document.getElementById("psd" ).value;
	var password1 = document.getElementById("psd1" ).value;
	var very =  document.getElementById("very" ).value;
	var login = document.getElementsByClassName("btn_login")[0];
	if(name =="" || password ==""||password1 ==""||very ==""){
		login.setAttribute("class","btn_login");
	}else{
		login.setAttribute("class","btn_login active" );
		login.onclick=function(){
			location.href = 'login.html';
		};
	}
}
setInterval(test,2000);



var code = document.getElementById("verify")
var seconds = 60;
function timer(e){
	if(seconds>0){
		e.value = seconds+"S后重新获取"
		seconds--;
		setTimeout(function(){
			timer(e)
		},1000)
		e.setAttribute("class","get-verify active")
		e.setAttribute("disabled",true)
	}else{
		e.removeAttribute("disabled")
		e.value = "获取验证码"
		e.setAttribute("class","get-verify")
		seconds=60
	}

}

code.onclick = function(){

	timer(this)
}