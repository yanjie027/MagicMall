/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".header_cancel" ).click(function(){
	$(".cover" ).show()
})
$(".box_bottom_left" ).click(function(){
	$(".cover" ).hide()
})
$(".box_bottom_right" ).click(function(){
	location.href = "../../index/index.html"
})
$(".header_submit" ).click(function(){
	location.href = "publish_success.html"
})