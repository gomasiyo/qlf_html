$(function (){
	
	$(document).ready(function() {
		if($.cookie("isLogin")){
			$(".isLogin").show();
		}else{
			$(".notLogin").show();
		}
	});

	$("body > header .search").click(function (){
		var $input = $("body > header .search > input");
		// if($input.width() < 100){
		$input.attr("placeholder", "search QLF...");
		$input.focus();

		$input.animate({
			width: "186px"
		},
		{
			duration:300,
			easing: "easeOutQuad"
		});
		// }
	});


	$("body > header .search").focusout(function (){
		var $input = $("body > header .search > input");

		$input.animate({
			width: "20px"
		},
		{
			duration:300,
			easing: "easeOutQuad"
		},function (){
			$input.val("");
			$input.attr("placeholder", "");
		});
	});

	$("body > header .user").click(function(event){
		$(this).children('ul').toggleClass("active");
	})

	$("body > header .user a").click(function(event) {
		event.preventDefault();
		location.href=$(this).attr("href");
		return false;
	});

	$("#signin button").click(function (event){
		event.preventDefault();

		$.ajax({
			url: DOMAIN+'/api/account/login',
			type: 'POST',
			dataType: 'json',
			data: $("#signin form").serialize(),
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

	$(".open-signin").click(function(event) {
		$("#signin").fadeIn();
		$("#signin form input:first-child").focus();
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