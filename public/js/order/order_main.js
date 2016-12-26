/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".detail_left" ).click(function(){
	location.href = "order_detail_unreceving.html"
})
$(".detail_right" ).click(function(){
	location.href = "order_detail_unreceving.html"
})
$(".button" ).click(function(){
	$(this ).addClass("active" ).text("已接单！")
})

$("._detail" ).on("swipeLeft",function(){
	$(this ).css("left","-17.6%")
})
$("._detail" ).on("swipeRight",function(){
	$(this ).css("left","0")
})
$(".delete" ).click(function(){
	$(this ).parent().detach()
})
$(".footer_li" ).eq(2 ).click(function(){
	$(".cover" ).show()
})
$(".close" ).click(function(){
	$(".cover" ).hide()
})
$(".circle_left" ).click(function(){
	location.href = "../../publish/publish_demand.html"
})
$(".circle_right" ).click(function(){
	location.href = "../../publish/submit_house.html"
})