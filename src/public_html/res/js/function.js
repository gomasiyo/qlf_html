var DOMAIN = "http://qlf-goma.cloudapp.net/";

$(function (){
	$(document).on("click", ".signout", function (){
		$.removeCookie("name");
		$.removeCookie("password");
		$.removeCookie("token");
		location.href = "/";
	});

	$(document).ready(function() {
		if($.cookie("name")){
			$(".navbar-right").show().not('[data-isLogin]').remove();

			var userInfo = $("#userInfo").html();
			$("#userInfo").html(
				userInfo.replace(/%%screenname%%/g, $.cookie("screen_name"))
						.replace(/%%name%%/g      , $.cookie("name"))
			);
		}else{
			$(".navbar-right").show();
			$('.navbar-right[data-isLogin]').remove();
		}
	});
})

function saveLoginData(data){
	$.cookie("name"       , data.name);
	$.cookie("password"   , data.passwd);
	$.cookie("token"      , data.token);
	$.cookie("screen_name", data.screen_name);
}