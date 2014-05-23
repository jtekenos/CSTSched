<?php
$primaryKey = $_REQUEST["q1"];
$field = $_REQUEST["q2"];
$levelSet = $_REQUEST["q3"];
$tableName = "schdule1";
session_start();
	
require_once('config.php');

	include 'functions.php';
	require_once('config.php');

	$admin = 0;
	session_start();
	// Connect to server and select database.
	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)or die("cannot connect, error: ".mysql_error());
	mysql_select_db(DB_DATABASE)or die("cannot select DB, error: ".mysql_error());
	$tbl_name="accounts"; // Table name
	if($_SESSION["SESS_admin"] == 1 && isLoggedIn()) {
		$admin = 1;
	}




$con=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM $tableName WHERE id = '$primaryKey'");

while($row = mysqli_fetch_array($result)) {
	if($field == "all") {
	  echo  $row['eventname'], "<br>", 
	  $row['event_date'], "<br>",
	  $row['timefrom'], " - ", $row['timeto'], 
	  "<br>", $row['location'], 
	  "<br>", $row['instructor'],  
	  "<br><span id=\"detailComments\">", $row['comments'], "</span><br>";
	  //SORAN add buttons on admin here please
	  if($admin == 1) {
	  	echo "<div id=\"eventInfoButtons\">

		  		<a onclick=\"cancelEvent()\" id=\"LoginButton\" class=\" ui-btn ui-btn-a ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Cancel class</a>

		  		<a href=\"#modifyPage \"onclick=\"fillFields()\" id=\"LoginButton\" class=\" ui-btn ui-btn-a ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Modify class</a>

		  		<a onclick=\"deleteEvent()\" id=\"LoginButton\" class=\" ui-btn ui-btn-a ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Delete class</a>

		  		<a onclick=\"cancelEvent()\" id=\"LoginButton\" class=\" ui-btn ui-btn-a ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Mark as Cancelled</a>

		  		<a onclick=\"importantEvent()\" id=\"LoginButton\" class=\" ui-btn ui-btn-a ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Mark as Important</a>

	  		</div>";
	  }
}
	else if($field == "location"){
		echo $row['location'];
	}
	else if($field == "instructor"){
		echo $row['instructor'];
	}
	else if($field == "eventname"){
		echo $row['eventname'];
	}
	else if($field == "comments"){
		echo $row['comments'];
	}
	else if($field == "level_id"){
		echo $row['level_id'];
	}
	else if($field == "timefrom"){
		echo $row['timefrom'];
	}
	else if($field == "timeto"){
		echo $row['timeto'];
	}
	else if($field == "event_date"){
		echo $row['event_date'];
	}
	
}

mysqli_close($con);

?>