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
var $reason = $(".reason_detail" )

$reason.click(function(){
	var $this = $( this ).find( ".checkbox" )
	if($this.hasClass("active")){
		$this.removeClass( "active" );
		if($(this ).index()==2){
			$(".textarea" ).hide()
		}
	}else{
		$this.addClass( "active" );
		if($(this ).index()==2){
			$(".textarea" ).show()
		}
	}
})
$(".button" ).click(function(){
	//$reason.
	$(".cover1").show()
})
$(".cover1 .box_bottom_right" ).click(function(){
	location.href = "order_main.html"
})