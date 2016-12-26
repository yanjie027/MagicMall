/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".header_cancel" ).on("click",function(){
	$(".cover" ).show()
})
$(".cover .box_bottom_left" ).click(function(){
	$(".cover" ).hide()
})
$(".cover .box_bottom_right" ).click(function(){
	location.href = "../../index/index.html"
})
$(".button" ).click(function(){
	$(".cover1" ).show()
})
$(".cover1 .box_bottom_right" ).click(function(){
	location.href = "../../index/index.html"
})
$("#search" ).on("focus",function(){
	location.href = "search_house.html"
})
$(".search span" ).click(function(){
	location.href = "add_house.html"
})
$(".source_info li" ).click(function(){
	if($(this ).find("i" ).hasClass("active")){
		$(this ).find("i" ).removeClass("active" ).addClass("point")
	}else{
		$(this ).find("i" ).removeClass("point" ).addClass("active")
	}
})
$(".source_detail_info td div" ).click(function(){
	if($(this ).find("i" ).hasClass("active")){
		$(this ).find("i" ).removeClass("active" ).addClass("point")
	}else{
		$(this ).find("i" ).removeClass("point" ).addClass("active")
	}
})