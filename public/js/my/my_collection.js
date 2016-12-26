/**
 * Created by Administrator on 2016/12/26 0026.
 */
var req = document.getElementsByClassName("req")[0];
var source = document.getElementsByClassName("source")[0];
var demands = document.getElementsByClassName("demands")[0];
var release_detail = document.getElementsByClassName("release_detail")[0];
req.onclick = function(){
	demands.style.display = 'block';
	release_detail.style.display = 'none';
	req.setAttribute("class","req active" );
	source.setAttribute("class","source" );
};
source.onclick = function(){
	demands.style.display = 'none';
	release_detail.style.display = 'block';
	req.setAttribute("class","req" );
	source.setAttribute("class","source active" );
};
