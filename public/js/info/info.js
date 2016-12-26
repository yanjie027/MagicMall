var lis = document.getElementsByTagName("header" )[0 ].getElementsByTagName("li");
var info = document.getElementsByClassName("info")[0];
var adv = document.getElementsByClassName("adv")[0];
var demand = document.getElementsByClassName("demand")[0];
var arr = [info,adv, demand];
for(var i=0;i<lis.length;i++){
	lis[i].index = i;
	lis[i].onclick = function(){
		this.setAttribute("class","active");
		for(var j=0;j<arr.length;j++){
			if(j == this.index){
				arr[j ].style.display = 'block';
			}else{
				arr[j ].style.display = 'none';
				lis[j ].removeAttribute("class");
			}
		}
	}
}
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