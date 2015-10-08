$(function (){
	$(document).ready(function() {
		if($.cookie("isLogin")){
			$(".isLogin").show();
		}else{
			$(".notLogin").show();
		}
	});

	$("body > header .search").hover(function (){
		var $input = $("body > header .search > input");
		if($input.width() < 100){
			$input.attr("placeholder", "search QLF...");
			$input.focus();

			$input.animate({
				width: "186px"
			},
			{
				duration:300,
				easing: "easeOutQuad"
			});
		}
	},
	function (){
		var $input = $("body > header .search > input");
		$input.val("");
		$input.attr("placeholder", "");
		$input.blur();

		$input.animate({
			width: "20px"
		},
		{
			duration:300,
			easing: "easeOutQuad"
		});
	}
	);

	$("#sign-in button").click(function (event){
		event.preventDefault();

		$.ajax({
			url: 'http://qlf-goma.cloudapp.net/api/account/login',
			type: 'POST',
			dataType: 'json',
			data: $("#sign-in form").serialize(),
		})
		.done(function (data){
			if(data.status){
				$.cookie("isLogin"    , "1"             , {expires : 3650});
				$.cookie("id"         , data.id         , {expires : 3650});
				$.cookie("name"       , data.name       , {expires : 3650});
				$.cookie("screen_name", data.screen_name, {expires : 3650});
				$.cookie("token"      , data.token      , {expires : 3650});
				location.href = "/dashboard";
			}
		});
		return false;
	});

	$(".logout").click(function(event) {
		$.removeCookie("id");
		$.removeCookie("name");
		$.removeCookie("screen_name");
		$.removeCookie("isLogin");
		$.removeCookie("token");
		location.href="/";
	});

	$(".open-sign-in").click(function(event) {
		$("#sign-in").fadeIn();
		$("#sign-in form input:first-child").focus();
	});

	$("body > header .search input").blur(function() {
		var $input = $("body > header .search > input");
			$input.val("");
			$input.attr("placeholder", "");

			$input.animate({
				width: "20px"
			},
			{
				duration:300,
				easing: "easeOutQuad"
			});
	});
})