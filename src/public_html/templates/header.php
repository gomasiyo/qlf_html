<!DOCTYPE html>
<html>
<head>
	<title>Title</title>
	<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="/res/css/style.css">
</head>
<body>

	<header class="isLogin">
		<nav>
			<ul class="navigation list">
				<li><a href="/">QLF</a></li>
				<li><a href="/dashboard/">Dashboard</a></li>
				<li><a class="logout">Log out</a></li>
			</ul>

			<div class="user">
				<img src="/res/images/icon.png">
				<span>%%sn%%</span>
				<ul>
					<li>User</li>

					<li>Settings</li>
					<li>Help</li>
					<li>Sign out</li>
				</ul>
			</div>

			<div class="search">
				<input type="text" name="search">
			</div>
		</nav>
	</header>

	<header class="notLogin">
		<nav>
			<ul class="navigation list">
				<li><a href="/">QLF</a></li>
				<li><a href="/dashboard/">Dashboard</a></li>
				<!-- <li><a class="logout">Log out</a></li> -->
			</ul>

			<ul class="signin list">
				<li><a class="open-signin">Sign in</a></li>
			</ul>
		</nav>
	</header>