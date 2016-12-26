/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".header_cancel" ).click(function(){
	$(".cover" ).show()
})
$(".header_submit" ).click(function(){
	$(".cover1" ).show()
})
$(".box_bottom_left" ).click(function(){
	$(".cover" ).hide()
})
$(".box_bottom_right" ).click(function(){
	history.back()
})