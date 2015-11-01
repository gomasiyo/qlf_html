$(function (){
	var $form          = $("form#signup");
	var $name          = $form.find("input[name='name']");
	var $email         = $form.find("input[name='email']");
	var $password      = $form.find("input[name='passwd']");
	var $passwordAgain = $form.find("input[name='passwd-again']");

	var passwordCheck = function (){
		return $password.val() == $passwordAgain.val();
	};

	var duplicationCheck = function ($obj, type, sendData){
		if(!$obj.val()){
			$obj.parent().removeClass('has-error');
			return false;
		}

		$.ajax({
			url: DOMAIN+'/api/account/check/',
			type: 'POST',
			dataType: 'json',
			data: sendData,
		})
		.done(function(data) {
			if(data.status){
				$obj.parent().addClass('has-error');
			}else{
				$obj.parent().removeClass('has-error');
			}
		})
	};

	$name.blur(function(event) {
		duplicationCheck($name, "name", {name:$name.val()});
	});

	$email.blur(function(event) {
		duplicationCheck($email, "email", {name:$email.val()});
	});

	$password.blur(function(event) {passwordCheck();});
	$passwordAgain.blur(function(event) {passwordCheck();});

	$form.submit(function(event) {
		event.preventDefault();
		console.log($form.serialize());

		$.ajax({
			url: DOMAIN+'/api/account/signup',
			type: 'POST',
			dataType: 'json',
			data: $form.serialize(),
		})
		.done(function(data) {
			console.log(data);

			$.ajax({
				url: DOMAIN+'/api/account/login',
				type: 'POST',
				dataType: 'json',
				data: {
					name   : $name.val(),
					passwd : $password.val()
				},
			})
			.done(function(data) {
				console.log(data);
				saveLoginData(data);
				location.href="/dashboard";
			});

		});
		return false;
	});
	
});