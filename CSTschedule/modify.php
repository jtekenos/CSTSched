<?php
include "functions.php";
	//Start session
	session_start();

	//Include database connection details
	require_once('config.php');

	$con=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

	//Sanitize the POST values
	$primaryKey = mysqli_real_escape_string($con, $_POST['key']);
	$event = mysqli_real_escape_string($con, $_POST['addEventName']);
	$prof = mysqli_real_escape_string($con, $_POST['addProfName']);
	$location = mysqli_real_escape_string($con, $_POST['addLocation']);
	$eventType = mysqli_real_escape_string($con, $_POST['eventType']);
	$level = mysqli_real_escape_string($con, $_POST['selLevel']);
	$startTime = mysqli_real_escape_string($con, $_POST['selStartTime']);
	$endTime = mysqli_real_escape_string($con, $_POST['selEndTime']);
	$date = mysqli_real_escape_string($con, $_POST['date']);
	$classType = mysqli_real_escape_string($con, $_POST['classType']);
	
	$tableName = "schdule1";




$levelSet = $level . $set;

$result = mysqli_query($con,"SELECT * FROM $tableName WHERE id = '$primaryKey'");

while($row = mysqli_fetch_array($result)) {
  $Oldevent = $row['eventname'];
  $Oldlocation = $row['location'];
  $OldstartTime = $row['timefrom'];
  $OldendTime = $row['timeto'];
  $Oldprof = $row['instructor'];
  $OldlevelSet = $row['level_id'];
  $OldeventType = $row['comments'];
  $Olddate = $row['event_date'];
  $OldclassType = $row['special'];
}

	//if new value is blank set it as the previously stored one
	if ($event == '') {
		$event = $Oldevent;
	}
	if ($location == '') {
		$location = $Oldlocation;
	}
	if ($startTime == '') {
		$startTime = $OldstartTime;
	}
	if ($endTime == '') {
		$endTime = $OldendTime;
	}
	if ($prof == '') {
		$prof = $Oldprof;
	}
	//if ($level == "noLvl" or empty($_POST['checkboxSet'])) {
		$levelSet = $OldlevelSet;
	//}
	if ($eventType == '') {
		$eventType = $OldeventType;
	}
	if ($date == '') {
		$date = $Olddate;
	}
	if ($classType == '') {
		$classType = $OldclassType;
	}

$startTBlock = tBlockConverter($startTime);
$tBlocks = tBlockConverter($endTime) - $startTBlock;


$usedBlockArray = array();
$index = 0;
for($i=$tBlocks-1; $i>=0; $i--){
  	$usedBlock = $startTBlock + $i;
  	$usedBlockArray[$index] = $usedBlock;
  	$index++;
  }

$passed = 1;

if($tBlocks < 1) {
	echo "<h3>Please select a valid time<h3>";
	$passed = 0;
} 

$result = mysqli_query($con,"SELECT * FROM schdule1 WHERE event_date = '$date' AND level_id = '$levelSet' AND id <> '$primaryKey'");
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


if($passed == 2) {
 echo "<h3>please pick another time<h3>";
}

if($passed == 1) {
	mysqli_query($con,"UPDATE $tableName SET eventname = '$event', location = '$location', timefrom = '$startTime', timeto = '$endTime',
		instructor = '$prof', level_id = '$levelSet', comments = '$eventType', event_date = '$date', timeBlocks = '$tBlocks', special = '$classType' 
		WHERE id='$primaryKey'");
}




if($passed == 1) {
	echo "<h2>Modification successful</h2>
		<a href=\"CSTSchedule.html#schedule\" onClick=\"tableSelectorDate('tableHere')\" id=\"changeScheduleButton\" class=\"ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Back to Schedule</a>";
}

	mysqli_close($con);

?>