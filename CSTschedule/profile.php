<?php
include "functions.php";

	//Start session
	session_start();

	//Include database connection details
	require_once('config.php');

	$con=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

	//Sanitize the POST values
	$password = mysqli_real_escape_string($con, $_POST['pwd']);
	$email = mysqli_real_escape_string($con, $_POST['txtEmail']);
	$level = mysqli_real_escape_string($con, $_POST['levelp']);
	$set = mysqli_real_escape_string($con, $_POST['setp']);
	$levelSet = $level . $set;
	
	$tableName = "accounts";

	$tempID = $_SESSION['SESS_MEMBER_ID'];




$result = mysqli_query($con,"SELECT * FROM $tableName WHERE accountID = '$tempID'");

while($row = mysqli_fetch_array($result)) {
  $Oldpassword = $row['password'];
  $Oldemail = $row['email'];
  $OldlevelSet = $row['levelAndSet'];
}

	//if new value is blank set it as the previously stored one
	if ($password == '') {
		$password = $Oldpassword;
	}
	/*
	if( strcmp($password, $cpassword) != 0 ) {
		echo "Passwords do not match";
		$errflag = true;
		*/
	if ($email == '') {
		$email = $Oldemail;
	}
	if (strlen($levelSet) != 2) {
		$levelSet = $OldlevelSet;
	}

$passed = 1;

if($passed == 1) {
	mysqli_query($con,"UPDATE $tableName SET password = '$password', email = '$email', levelAndSet = '$levelSet' WHERE accountID = '$tempID'");
}




if($passed == 1) {
	echo "<h2>Account information updated</h2>
		<a href=\"CSTSchedule.html#schedule\" onClick=\"tableSelectorDate('tableHere')\" id=\"changeScheduleButton\" class=\"ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Back to Schedule</a>";
}

	mysqli_close($con);
?>