<?php include __DIR__."/../../templates/header.php";?>

	<main id="signup">
		<h1>Sign up QLF</h1>
		<form method="post">
			<input type="text" name="user-id"   placeholder="User ID">
			<input type="text" name="user-name" placeholder="Nickname">
			<input type="password" name="user-password" placeholder="Password">
			<input type="password" name="user-again" placeholder="Password again">

			<input type="hidden" id="csrf" name="csrf" value="<?php #code ?>">

			<button class="submit">Sign up</button>
		</form>
	</main>

<?php include __DIR__."/../../templates/footer.php";?>