var loginManager = function (){

	this.signUp = function (){
		$.getJSON(
			DOMAIN+'/api/account/login', 
			data: $("#signin form").serialize(), 
			function(data) {
				if(data.status){
					$.cookie("isLogin"    , "1"             , {expires : 3650});
					$.cookie("id"         , data.id         , {expires : 3650});
					$.cookie("name"       , data.name       , {expires : 3650});
					$.cookie("screen_name", data.screen_name, {expires : 3650});
					$.cookie("token"      , data.token      , {expires : 3650});
					location.href = "/dashboard";
				}
				return true;
			}
		);
		return false;
	};

	this.logOut = function (){
		$.removeCookie("id");
		$.removeCookie("name");
		$.removeCookie("screen_name");
		$.removeCookie("isLogin");
		$.removeCookie("token");
		location.href="/";
	};

}