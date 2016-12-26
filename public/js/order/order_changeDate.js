/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".person_icon" ).click(function(){
	$(".cover2" ).show()
})
$(".cover2 .box_bottom_left" ).click(function(){
	$(".cover2" ).hide()
})
$(".cover2 .box_bottom_right" ).click(function(){
	$(".cover2" ).hide()
})
$(".header_cancel" ).click(function(){
	location.href = "order_detail.html"
})
$(".header_submit" ).click(function(){
	$(".cover" ).show()
} )
$(".cover .box_bottom_left" ).click(function(){
	$(".cover" ).hide()
})
$(".cover .box_bottom_right" ).click(function(){
	$(".cover" ).hide()
	$(".cover1" ).show()
})
$(".cover1 .box_bottom_right" ).click(function(){
	location.href = "order_detail.html"
})