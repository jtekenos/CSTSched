<?php
	//Start session
	session_start();
	
	//Include database connection details
	require_once('config.php');
	
	//Validation error flag
	$errflag = false;
	
	//Connect to mysql server
	$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	if(!$link) {
		//die('Failed to connect to server: ' . mysql_error());
	}
	
	//Select database
	$db = mysql_select_db(DB_DATABASE);
	if(!$db) {
		echo "Unable to select database<br>";
	}
	
	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}
	
	//Sanitize the REQUEST values - parameters may come from GET or POST
	$login = clean($_POST['username']);
	$password = clean($_POST['password']);
	
	//Input Validations
	if($login == '') {
		echo "Login ID missing<br>";
		$errflag = true;
	}
	if($password == '') {
		echo "Password missing<br>";
		$errflag = true;
	}
	
	//Create query
	$qry="SELECT * FROM accounts WHERE username='$login' AND password='$password'";
	$result=mysql_query($qry);
	
	//Check whether the query was successful or not
	if($result) {
		if(mysql_num_rows($result) == 1) {
			//Login Successful
			session_regenerate_id();
			$member = mysql_fetch_assoc($result);
			$_SESSION['SESS_MEMBER_ID'] = $member['accountID'];
			$_SESSION['SESS_levelAndSet'] = $member['levelAndSet'];
			$_SESSION['SESS_admin'] = $member['admin'];
			$_SESSION['SESS_LOGIN_NAME'] = $member['username'];
			session_write_close();
			$uname = $_SESSION['SESS_LOGIN_NAME'];
			echo "<h2 style=\"text-align:center\">Welcome $uname</h2>";

			echo "<a href=\"#schedule\" onClick=\"tableSelector('current', 'tableHere'); uNameButtons()\" id=\"changeScheduleButton\" class=\"ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Get to Schedule</a>";

			echo "<a href=\"#index\" id=\"changeScheduleButton\" class=\"ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Back</a>";

			exit();
		}else {
			//Login failed
			echo "Login failed";
		}
	}else {
	//	die("Query failed");
	}
?>