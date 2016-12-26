/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".person_icon" ).click(function(){
	$(".cover" ).show()
})
$(".box_bottom_left" ).click(function(){
	$(".cover" ).hide()
})
$(".box_bottom_right" ).click(function(){
	$(".cover" ).hide()
})
var $nav = $(".footer_nav_detail" )

$nav.eq(0 ).click(function(){
	location.href = "order_changeDate.html"
})
$nav.eq(1 ).click(function(){
	location.href = "upload_contract.html"
})
$nav.eq(2 ).click(function(){
	location.href = "order_cancel.html"
})