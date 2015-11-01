var DOMAIN = "http://qlf-goma.cloudapp.net/";

$(function (){
	$(document).on("submit", "#signin form", function (){
		event.preventDefault();
		$.ajax({
			url: DOMAIN+'/api/account/login',
			type: 'POST',
			dataType: 'json',
			data: $(this).serialize(),
		})
		.done(function(data) {
			console.log(data);
			saveLoginData(data);
			location.href="/dashboard";
		});
		return false;
	});

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