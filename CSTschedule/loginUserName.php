<?php
 
	include 'functions.php';
	require_once('config.php');
	session_start();

	// Connect to server and select database.
	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)or die("cannot connect, error: ".mysql_error());
	mysql_select_db(DB_DATABASE)or die("cannot select DB, error: ".mysql_error());
	$tbl_name="accounts"; // Table name

			//$admin=$_REQUEST['admin'];
			//echo $admin;
	
	$loginName = $_SESSION["SESS_LOGIN_NAME"];
	$userLevelSet = $_SESSION["SESS_levelAndSet"];
	$admin = $_SESSION["SESS_admin"];
	/*
	echo "loginUserName says Hi";

 */
    if (isLoggedIn()){
        echo "<a href=\"#profile\" id=\"UserHeaderButton\" class=\" ui-btn ui-btn-a ui-icon-gear ui-btn-icon-left ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">$loginName</a>";
        	 
        echo "<a href=\"#index\" id=\"UserHeaderButton\" onclick=\"logout()\" class=\" ui-btn ui-btn-a ui-icon-gear ui-btn-icon-left ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Logout</a>";
           
         
  } else {
  	 echo "<a href=\"#loginPage\" id=\"UserHeaderButton\" class=\" ui-btn ui-btn-a ui-icon-gear ui-btn-icon-left ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Login</a>";

  	 echo "<a href=\"#registerPage\" id=\"UserHeaderButton\" class=\" ui-btn ui-btn-a ui-icon-gear ui-btn-icon-left ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Register</a>";
        }   
 
?>