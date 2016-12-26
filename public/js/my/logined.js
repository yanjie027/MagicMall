/**
 * Created by Administrator on 2016/12/26 0026.
 */
var icon = document.getElementsByClassName("icon")[0]
icon.onclick = function(){
	location.href = "setting.html"
}
var login = document.getElementsByClassName("login_main")[0]
login.onclick = function(){
	location.href = "personal_data.html"
}
var mydemand = document.getElementsByClassName("main_li")[0]
mydemand.onclick = function(){
	location.href = "my_demand.html"
}
var mysource = document.getElementsByClassName("main_li")[1]
mysource.onclick = function(){
	location.href = "my_release.html"
}
var myreservation = document.getElementsByClassName("main_li")[2]
myreservation.onclick = function(){
	location.href = "my_reservation.html"
}
var myhistory = document.getElementsByClassName("main_li")[3]
myhistory.onclick = function(){
	location.href = "my_history.html"
}
var myoverdue = document.getElementsByClassName("main_li")[4]
myoverdue.onclick = function(){
	location.href = "my_overdue.html"
}
var collection = document.getElementsByClassName("txt")[0]
collection.onclick = function(){
	location.href = "my_collection.html"
}
var footer2 = document.getElementsByClassName("footer_li")[2]
var cover = document.getElementsByClassName("cover")[0]
footer2.onclick = function(){
	cover.setAttribute("class","cover active")
}
var close = document.getElementsByClassName("close")[0]
close.onclick = function(){
	cover.setAttribute("class","cover")
}
var circle_left = document.getElementsByClassName("circle_left")[0]
circle_left.onclick = function(){
	location.href = "../../publish/publish_demand.html"
}
var circle_right = document.getElementsByClassName("circle_right")[0]
circle_right.onclick = function(){
	location.href = "../../publish/submit_house.html"
}
var footer0 = document.getElementsByClassName("footer_li")[0]
footer0.onclick = function(){
	location.href = "../../index/index.html"
}
var footer1 = document.getElementsByClassName("footer_li")[1]
footer1.onclick = function(){
	location.href = "../../order/order_main.html"
}
var footer3 = document.getElementsByClassName("footer_li")[3]
footer3.onclick = function(){
	location.href = "../../info/info.html"
}
