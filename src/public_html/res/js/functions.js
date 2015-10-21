(function($) {
    $.extend({
		htmlspecialchars: function htmlspecialchars(ch){
			ch = ch.replace(/&/g,"&amp;") ;
			ch = ch.replace(/"/g,"&quot;") ;
			ch = ch.replace(/'/g,"&#039;") ;
			ch = ch.replace(/</g,"&lt;") ;
			ch = ch.replace(/>/g,"&gt;") ;
			return ch ;
		}
	});
})(jQuery);

function logOut(){
	$.removeCookie("id");
	$.removeCookie("name");
	$.removeCookie("screen_name");
	$.removeCookie("isLogin");
	$.removeCookie("token");
	location.href="/";
}