<?php
 
	include 'functions.php';
	require_once('config.php');
	//$admin = 0;
	//echo "testting yo";
	session_start();

	// Connect to server and select database.
	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)or die("cannot connect, error: ".mysql_error());
	mysql_select_db(DB_DATABASE)or die("cannot select DB, error: ".mysql_error());
	$tbl_name="accounts"; // Table name

	$admin = $_SESSION["SESS_admin"];

	if (isLoggedIn()){
		if($admin == 1) {
			echo "<a href=\"#add\" id=\"addButton\" class=\" ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Add</a>";
		}
		else {
			echo "";
		}
	}
//$admin = 0;
?>