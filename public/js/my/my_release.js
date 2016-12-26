/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(".detail" ).on("swipeLeft",function(){
	$(this ).css("left","-17.6%")
})
$(".detail" ).on("swipeRight",function(){
	$(this ).css("left","0")
})
$(".delete" ).click(function(){
	$(this ).parent().detach()
})
