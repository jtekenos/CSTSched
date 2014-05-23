<?php
	require_once('config.php');
	//Start session
	session_start();
	
	//Unset the variables stored in session
	unset($_SESSION['SESS_MEMBER_ID']);
	unset($_SESSION['SESS_levelAndSet']);
	unset($_SESSION['SESS_LOGIN_NAME']);
	session_write_close();
	echo "Logout Successful";
	exit();
?>
