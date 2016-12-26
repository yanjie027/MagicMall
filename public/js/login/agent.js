/**
 * Created by Administrator on 2016/12/23 0023.
 */
var login = document.getElementsByClassName("btn_login")[0];
login.onclick=function(){
	var name = document.getElementById("name" ).value
	var mail = document.getElementById("mail" ).value
	var contact = document.getElementById("contact" ).value
	var way = document.getElementById("way" ).value
	if(name !="" && mail!="" && contact!="" && way!= ""){
		location.href = "confirm.html";
	}
}