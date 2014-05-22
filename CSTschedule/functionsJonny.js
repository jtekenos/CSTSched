//src="http://code.jquery.com/jquery-1.9.1.js";
function menuSelector(sourceId, destinationId) {
	var clickedMenu = document.getElementById(sourceId).innerHTML;
	var destinationMenu = document.getElementById(destinationId).innerHTML;
	//document.write(document.getElementById(destinationId).innerHTML);
	document.getElementById(destinationId).innerHTML = clickedMenu;
	if (clickedMenu == 'Level 1'){
		document.getElementById('setA').style.display = 'block';
    	document.getElementById('setB').style.display = 'block';
    	document.getElementById('setC').style.display = 'block';
    	document.getElementById('setD').style.display = 'none';
    	document.getElementById('setE').style.display = 'none';
    	document.getElementById('setG').style.display = 'none';
    	document.getElementById('setL').style.display = 'none';
    	document.getElementById('setO').style.display = 'none';
    	document.getElementById('setQ').style.display = 'none';
    	$("#levelCollapsible").collapsible({collapsed:true});
	} else if (clickedMenu == 'Level 2') {
		document.getElementById('setA').style.display = 'block';
    	document.getElementById('setB').style.display = 'block';
    	document.getElementById('setC').style.display = 'block';
    	document.getElementById('setD').style.display = 'block';
    	document.getElementById('setE').style.display = 'block';
    	document.getElementById('setG').style.display = 'none';
    	document.getElementById('setL').style.display = 'none';
    	document.getElementById('setO').style.display = 'none';
    	document.getElementById('setQ').style.display = 'none';
    	$("#levelCollapsible").collapsible({collapsed:true});
	} else if (clickedMenu == 'Level 3') {
		document.getElementById('setA').style.display = 'none';
    	document.getElementById('setB').style.display = 'none';
    	document.getElementById('setC').style.display = 'block';
    	document.getElementById('setD').style.display = 'block';
    	document.getElementById('setE').style.display = 'none';
    	document.getElementById('setG').style.display = 'none';
    	document.getElementById('setL').style.display = 'block';
    	document.getElementById('setO').style.display = 'none';
    	document.getElementById('setQ').style.display = 'none';
    	$("#levelCollapsible").collapsible({collapsed:true});
	} else if (clickedMenu == 'Level 4') {
		document.getElementById('setA').style.display = 'block';
    	document.getElementById('setB').style.display = 'block';
    	document.getElementById('setC').style.display = 'none';
    	document.getElementById('setD').style.display = 'none';
    	document.getElementById('setE').style.display = 'none';
    	document.getElementById('setG').style.display = 'block';
    	document.getElementById('setL').style.display = 'none';
    	document.getElementById('setO').style.display = 'block';
    	document.getElementById('setQ').style.display = 'block';
    	$("#levelCollapsible").collapsible({collapsed:true});
	} 
}

function collapseSet() {
	$("#setCollapsible").collapsible({collapsed:true})
}

function collapseSet2() {
	$("#setCollapsible2").collapsible({collapsed:true})
}

function collapseLevel2() {
	$("#levelCollapsible2").collapsible({collapsed:true});
}


function dynamicSetCheckbox() {
	var selectedLevel = $( "#selLevel" ).val();
	if (selectedLevel == 1) {
		$( "#setCheckboxLvl0" ).hide();
		$( "#setCheckboxLvl1" ).show();
		$( "#setCheckboxLvl2" ).hide();
		$( "#setCheckboxLvl3" ).hide();
		$( "#setCheckboxLvl4" ).hide();
	} else if (selectedLevel == 2) {
		$( "#setCheckboxLvl0" ).hide();
		$( "#setCheckboxLvl1" ).hide();
		$( "#setCheckboxLvl2" ).show();
		$( "#setCheckboxLvl3" ).hide();
		$( "#setCheckboxLvl4" ).hide();
	} else if (selectedLevel == 3) {
		$( "#setCheckboxLvl0" ).hide();
		$( "#setCheckboxLvl1" ).hide();
		$( "#setCheckboxLvl2" ).hide();
		$( "#setCheckboxLvl3" ).show();
		$( "#setCheckboxLvl4" ).hide();		
	} else if (selectedLevel == 4) {
		$( "#setCheckboxLvl0" ).hide();
		$( "#setCheckboxLvl1" ).hide();
		$( "#setCheckboxLvl2" ).hide();
		$( "#setCheckboxLvl3" ).hide();
		$( "#setCheckboxLvl4" ).show();
	}
} 

function dynamicSetCheckbox2() {
	var selectedLevel2 = $( "#selLevel2" ).val();
	if (selectedLevel2 == 1) {
		$( "#setCheckboxLvl0_2" ).hide();
		$( "#setCheckboxLvl1_2" ).show();
		$( "#setCheckboxLvl2_2" ).hide();
		$( "#setCheckboxLvl3_2" ).hide();
		$( "#setCheckboxLvl4_2" ).hide();
	} else if (selectedLevel2 == 2) {
		$( "#setCheckboxLvl0_2" ).hide();
		$( "#setCheckboxLvl1_2" ).hide();
		$( "#setCheckboxLvl2_2" ).show();
		$( "#setCheckboxLvl3_2" ).hide();
		$( "#setCheckboxLvl4_2" ).hide();
	} else if (selectedLevel2 == 3) {
		$( "#setCheckboxLvl0_2" ).hide();
		$( "#setCheckboxLvl1_2" ).hide();
		$( "#setCheckboxLvl2_2" ).hide();
		$( "#setCheckboxLvl3_2" ).show();
		$( "#setCheckboxLvl4_2" ).hide();		
	} else if (selectedLevel2 == 4) {
		$( "#setCheckboxLvl0_2" ).hide();
		$( "#setCheckboxLvl1_2" ).hide();
		$( "#setCheckboxLvl2_2" ).hide();
		$( "#setCheckboxLvl3_2" ).hide();
		$( "#setCheckboxLvl4_2" ).show();
	}
} 

function getLevel(lvlId) {
	storeLevel = document.getElementById(lvlId).value;
	return storeLevel;
}

function getSet(setId) {
	storeSet = document.getElementById(setId).value;
	return storeSet;
}

//displays the schedule for selected week and set Ajax => scheduleTable.php
function tableSelector(direction, tableId) { 
	levelSet = storeLevel + storeSet;
	if(direction == "current") {
	}
	else if(direction == "later") {
		var numDate = document.getElementById("numDateId").innerHTML;
		numDate = parseInt(numDate) + 86400 * 7;
	}
	else if(direction == "earlier") {
		var numDate = document.getElementById("numDateId").innerHTML;
		numDate = parseInt(numDate) - 86400 * 7;
	}

 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById(tableId).innerHTML=xmlhttp.responseText;
    }
  }

if(direction == "current") {
	xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/scheduleTable.php?q1=&q2=" + levelSet,true);
}
else {
	xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/scheduleTable.php?q1=" + numDate  + "&q2=" + levelSet, true);
}
  
  xmlhttp.send();
}
//updates stored timestamp if a new date is selected
function dateUpdate() {
	var newDate = document.getElementById("changeDate").value;
	if(newDate == "") {
		numDate = new Date().getTime() / 1000;
	}
	else {
	numDate = new Date(newDate).getTime() / 1000;
	}
	
}
//displays the schedule for last stored date and set Ajax => scheduleTable.php
function tableSelectorDate(tableId) { 
	dateUpdate();
	levelSet = storeLevel + storeSet;
	 var xmlhttp=new XMLHttpRequest();
	  xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	      document.getElementById(tableId).innerHTML=xmlhttp.responseText;
	    }
	  }

	xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/scheduleTable.php?q1=" + numDate  + "&q2=" + levelSet, true);

  
  xmlhttp.send(); 
}

//gets details about selected event AJAX => eventDetails.php
function detailsJs(sourceId) {
	var field = "all";
	primaryKey = sourceId;
	document.getElementsByName("key").value=primaryKey;
	document.getElementById("eventInfoContent").innerHTML="Loading Details...";
	var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("eventInfoContent").innerHTML=xmlhttp.responseText;
    }
  }
	xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/eventDetails.php?q1="+primaryKey + "&q2=" + field +
		"&q3=" + levelSet, true);
	xmlhttp.send();
}

//displays a field for selected entry in the database AJAX => eventDetails.php
function pullField(dataField, destinationId) {
	var field = dataField;
	var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementsByName(destinationId)[0].value=responseText;
    }
  }
	xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/eventDetails.php?q1="+primaryKey + "&q2=" + 
		field + "&q3=" + levelSet,true);
	xmlhttp.send();
}
//deletes selected event via AJAX => cancel.php
//deletes selected event via AJAX => cancel.php
function deleteEvent() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("eventInfoContent").innerHTML=xmlhttp.responseText;
    }
  }

xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/delete.php?q=" + primaryKey + "&q2=" + levelSet,true);

  xmlhttp.send();
}

//deletes selected event via AJAX => cancel.php
function cancelEvent() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("eventInfoContent").innerHTML=xmlhttp.responseText;
    }
  }

xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/cancel.php?q=" + primaryKey + "&q2=" + levelSet,true);

  xmlhttp.send();
}

function importantEvent() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("eventInfoContent").innerHTML=xmlhttp.responseText;
    }
  }

xmlhttp.open("GET","important.php?q=" + primaryKey + "&q2=" + levelSet,true);

  xmlhttp.send();
}

function scheduleHeader() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("navHeader").innerHTML = xmlhttp.responseText;
    }
  }

xmlhttp.open("GET","scheduleHeader.php",true);
xmlhttp.send();
}

function fillFields() {
	document.getElementsByName("key")[0].value=primaryKey;
	pullField("eventname", "addEventName");
	pullField("location", "addProfName");
	pullField("instructor", "addLocation");
	pullField("from", "from");
	pullField("to", "to");
	pullField("event_date", "event_date");
	pullField("comments", "comments");
}

//shake detection function
var shake = (function () {
    var shake = {},
        watchId = null,
        options = { frequency: 300 },
        previousAcceleration = { x: null, y: null, z: null },
        shakeCallBack = null;

    // Start watching the accelerometer for a shake gesture
    shake.startWatch = function (onShake) {
        if (onShake) {
            shakeCallBack = onShake;
        }
        watchId = navigator.accelerometer.watchAcceleration(getAccelerationSnapshot, handleError, options);
    };

    // Stop watching the accelerometer for a shake gesture
    shake.stopWatch = function () {
        if (watchId !== null) {
            navigator.accelerometer.clearWatch(watchId);
            watchId = null;
        }
    };

    // Gets the current acceleration snapshot from the last accelerometer watch
    function getAccelerationSnapshot() {
        navigator.accelerometer.getCurrentAcceleration(assessCurrentAcceleration, handleError);
    }

    // Assess the current acceleration parameters to determine a shake
    function assessCurrentAcceleration(acceleration) {
        var accelerationChange = {};
        if (previousAcceleration.x !== null) {
            accelerationChange.x = Math.abs(previousAcceleration.x, acceleration.x);
            accelerationChange.y = Math.abs(previousAcceleration.y, acceleration.y);
            accelerationChange.z = Math.abs(previousAcceleration.z, acceleration.z);
        }
        if (accelerationChange.x + accelerationChange.y + accelerationChange.z > 30) {
            // Shake detected
            if (typeof (shakeCallBack) === "function") {
                shakeCallBack();
            }
            shake.stopWatch();
            setTimeout(shake.startWatch, 1000, shakeCallBack);
            previousAcceleration = { 
                x: null, 
                y: null, 
                z: null
            }
        } else {
            previousAcceleration = {
                x: acceleration.x,
                y: acceleration.y,
                z: acceleration.z
            }
        }
    }

    // Handle errors here
    function handleError() {
    }

    return shake;
})();

//use ajax to submit modify and diplay a response from the server
$(function() {
	$("#modForm").on("submit", function(e) {
		e.preventDefault();
		$.ajax({
		    url: $(this).attr("action"),
		    type: 'POST',
		    data: $(this).serialize(),
		    success: function(data) {
		        $("#modResponse").html(data);
		        window.location.href = "#modifyPage";
		    }
		});
	});
});

//use ajax to submit add form and diplay a response from the server
$(function() {
	$("#addForm").on("submit", function(e) {
		e.preventDefault();
		$.ajax({
		    url: $(this).attr("action"),
		    type: 'POST',
		    data: $(this).serialize(),
		    success: function(data) {
		        $("#addResponse").html(data);
		        window.location.href = "#add";
		    }
		});
	});
});