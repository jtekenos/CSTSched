<?php
	//Start session
	session_start();
	
	//Include database connection details
	require_once('config.php');

	
	
	//Connect to mysql server
	$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	if(!$link) {
		die('Failed to connect to server: ' . mysql_error());
	}
	
	//Select database
	$db = mysql_select_db(DB_DATABASE);
	if(!$db) {
		die("Unable to select database");
	}
	
	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}
	
	//Sanitize the POST values
	$login = clean($_POST['uName']);
	$password = clean($_POST['pwd']);
	$cpassword = clean($_POST['confirmPwd']);
	$email = clean($_POST['email']);
	$set = clean($_POST['set']);
	$level = clean($_POST['level']);
	
	//Input Validations

	$errflag = false;
	if($login == '') {
		echo "User name missing";
		$errflag = true;
	}
	if($password == '') {
		echo "Password missing";
		$errflag = true;
	}
	if($cpassword == '') {
		echo "Confirm password missing";
		$errflag = true;
	}
	if( strcmp($password, $cpassword) != 0 ) {
		echo "Passwords do not match";
		$errflag = true;
	}
	if($email == '') {
		echo "Email missing";
		$errflag = true;
	}
	if($set == '') {
		echo "Set missing";
		$errflag = true;
	}
	if($level == '') {
		echo "Level missing";
		$errflag = true;
	}

	
	//Check for duplicate login ID
	if($login != '') {
		$qry = "SELECT * FROM accounts WHERE username='$login'";
		$result = mysql_query($qry);
		if($result) {
			if(mysql_num_rows($result) > 0) {
				echo "User name already in use";
				$errflag = true;
			}
			@mysql_free_result($result);
		}
		else {
			die("Query failed");
		}
	}
	
	//If there are input validations, redirect back to the registration form

	//Create INSERT query
	if($errflag == false) {
		$qry = "INSERT INTO accounts(username, levelAndSet, email, password) VALUES('$login','$level$set', '$email','$password')";
		
	$result = mysql_query($qry);
	}
	
	
	//Check whether the query was successful or not
	if($result) {
		echo "registration successful";
		exit();
	}else {
		die("Query failed");
	}
?>
