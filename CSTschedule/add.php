<?php

	include "functions.php";

	//Start session
	session_start();

	
	//Include database connection details
	require_once('config.php');

	$con=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

if (mysqli_connect_errno()) {
  //echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
//Sanitize the POST values
$event = mysqli_real_escape_string($con, $_POST['addEventName']);
$prof = mysqli_real_escape_string($con, $_POST['addProfName']);
$location = mysqli_real_escape_string($con, $_POST['addLocation']);
$eventType = mysqli_real_escape_string($con, $_POST['eventType']);
$level = mysqli_real_escape_string($con, $_POST['selLevel2']);
$startTime = mysqli_real_escape_string($con, $_POST['selStartTime']);
$endTime = mysqli_real_escape_string($con, $_POST['selEndTime']);
$date = mysqli_real_escape_string($con, $_POST['date']);
$classType = mysqli_real_escape_string($con, $_POST['classType']);

//calculates number of timeblocks used
$startTBlock = tBlockConverter($startTime);
$tBlocks = tBlockConverter($endTime) - $startTBlock;

//makes an array of the used timeblocks
$usedBlockArray = array();
$index = 0;
for($i=$tBlocks-1; $i>=0; $i--){
  	$usedBlock = $startTBlock + $i;
  	$usedBlockArray[$index] = $usedBlock;
  	$index++;
  }

//server side valdiation
$passed = 1;
if($tBlocks < 1) {
	echo "<h3>Enter a valid time<h3>";
	$passed = 0;
} 
if($event == "") {
	echo "<h3>Enter the event name<h3>";
	$passed = 0;
}
if($location == "") {
	echo "<h3>Enter the location<h3>";
	$passed = 0;
}
if($level == "noLvl" or empty($_POST['checkboxSet'])) {
	echo "<h3>Enter the level and set<h3>";
	$passed = 0;
}
if($date == "") {
	echo "<h3>Enter the date<h3>";
	$passed = 0;
}

//checks if the timeslots to be used conflict with already scheduled events
if(!empty($_POST['checkboxSet'])) {
    foreach($_POST['checkboxSet'] as $check) {
    	$checkedSet =  substr($check,3,4);
    	$levelSet = $level . $checkedSet;
		$result = mysqli_query($con,"SELECT * FROM schdule1 WHERE event_date = '$date' AND level_id = '$levelSet'");
		while($row = mysqli_fetch_array($result)) {
		  $oldStartTBlock = tBlockConverter($row['timefrom']);
		  $oldEndTBlock = tBlockConverter($row['timeto']);
		  $oldtBlocks = $oldEndTBlock - $oldStartTBlock;
		  
		  for($i=$oldtBlocks-1; $i>=0; $i--){
		  	$oldUsedBlock = $oldStartTBlock + $i;

		  	foreach ($usedBlockArray as $value) {
		  		if($oldUsedBlock == $value) {
		  			$passed = 2;
		  		}
			}
		  }
		}
		
	}
}

if($passed == 2) {
 echo "<h3>Choose a different time<h3>";
}

//if all validation is passed adds entry into database for each set selected
if($passed == 1) {
	foreach($_POST['checkboxSet'] as $check) {
    	$checkedSet =  substr($check,3,4);
    	$levelSet = $level . $checkedSet;
		$sql="INSERT INTO schdule1 (eventname, location, timefrom, timeto, instructor, comments, level_id, timeBlocks, event_date, special)
		VALUES ('$event','$location','$startTime','$endTime','$prof','$eventType', '$levelSet', '$tBlocks', '$date', '$classType')";
			
		if (!mysqli_query($con,$sql)) {
	  		die('Error: ' . mysqli_error($con));
		}
	}
}

if($passed == 1) {
	echo "<h2>Entry Added</h2>
		<a href=\"CSTSchedule.html#schedule\" onClick=\"tableSelectorDate('tableHere')\" id=\"changeScheduleButton\" class=\"ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Back to Schedule</a>";
}
mysqli_close($con);
?>
