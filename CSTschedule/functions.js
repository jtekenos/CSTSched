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

function menuSelector2(sourceId, destinationId) {
  var clickedMenu = document.getElementById(sourceId).innerHTML;
  var destinationMenu = document.getElementById(destinationId).innerHTML;
  //document.write(document.getElementById(destinationId).innerHTML);
  document.getElementById(destinationId).innerHTML = clickedMenu;
  if (clickedMenu == 'Level 1'){
      document.getElementById('SDsetA').style.display = 'block';
      document.getElementById('SDsetB').style.display = 'block';
      document.getElementById('SDsetC').style.display = 'block';
      document.getElementById('SDsetD').style.display = 'none';
      document.getElementById('SDsetE').style.display = 'none';
      document.getElementById('SDsetG').style.display = 'none';
      document.getElementById('SDsetL').style.display = 'none';
      document.getElementById('SDsetO').style.display = 'none';
      document.getElementById('SDsetQ').style.display = 'none';
      $("#levelCollapsible2").collapsible({collapsed:true});
  } else if (clickedMenu == 'Level 2') {
      document.getElementById('SDsetA').style.display = 'block';
      document.getElementById('SDsetB').style.display = 'block';
      document.getElementById('SDsetC').style.display = 'block';
      document.getElementById('SDsetD').style.display = 'block';
      document.getElementById('SDsetE').style.display = 'block';
      document.getElementById('SDsetG').style.display = 'none';
      document.getElementById('SDsetL').style.display = 'none';
      document.getElementById('SDsetO').style.display = 'none';
      document.getElementById('SDsetQ').style.display = 'none';
      $("#levelCollapsible2").collapsible({collapsed:true});
  } else if (clickedMenu == 'Level 3') {
      document.getElementById('SDsetA').style.display = 'none';
      document.getElementById('SDsetB').style.display = 'none';
      document.getElementById('SDsetC').style.display = 'block';
      document.getElementById('SDsetD').style.display = 'block';
      document.getElementById('SDsetE').style.display = 'none';
      document.getElementById('SDsetG').style.display = 'none';
      document.getElementById('SDsetL').style.display = 'block';
      document.getElementById('SDsetO').style.display = 'none';
      document.getElementById('SDsetQ').style.display = 'none';
      $("#levelCollapsible2").collapsible({collapsed:true});
  } else if (clickedMenu == 'Level 4') {
      document.getElementById('SDsetA').style.display = 'block';
      document.getElementById('SDsetB').style.display = 'block';
      document.getElementById('SDsetC').style.display = 'none';
      document.getElementById('SDsetD').style.display = 'none';
      document.getElementById('SDsetE').style.display = 'none';
      document.getElementById('SDsetG').style.display = 'block';
      document.getElementById('SDsetL').style.display = 'none';
      document.getElementById('SDsetO').style.display = 'block';
      document.getElementById('SDsetQ').style.display = 'block';
      $("#levelCollapsible2").collapsible({collapsed:true});
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
  if (selectedLevel == 0) {
    $( "#setCheckboxLvl0" ).show();
    $( "#setCheckboxLvl1" ).hide();
    $( "#setCheckboxLvl2" ).hide();
    $( "#setCheckboxLvl3" ).hide();
    $( "#setCheckboxLvl4" ).hide();
	} if (selectedLevel == 1) {
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
	if (selectedLevel2 == 'noLvl') {
    $( "#setCheckboxLvl0_2" ).show();
    $( "#setCheckboxLvl1_2" ).hide();
    $( "#setCheckboxLvl2_2" ).hide();
    $( "#setCheckboxLvl3_2" ).hide();
    $( "#setCheckboxLvl4_2" ).hide();
  } else if (selectedLevel2 == 1) {
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
  levelSet = storeLevel + storeSet;
	return storeLevel;
}

function getSet(setId) {
	storeSet = document.getElementById(setId).value;
  levelSet = storeLevel + storeSet;
	return storeSet;
}

//gets level entered on register page & displays available set select <option> only
function registerSetSelect() {
  var regLvl = document.getElementById('registerLevel').value
  if (regLvl == 'noLvl') {
    $('#registerSet option[value="A"]').hide();
    $('#registerSet option[value="B"]').hide();
    $('#registerSet option[value="C"]').hide();
    $('#registerSet option[value="D"]').hide();
    $('#registerSet option[value="E"]').hide();
    $('#registerSet option[value="G"]').hide();
    $('#registerSet option[value="L"]').hide(); 
    $('#registerSet option[value="O"]').hide();
    $('#registerSet option[value="Q"]').hide();        
  }else if (regLvl == '1') {
    $('#registerSet option[value="noLvl"]').hide();
    $('#registerSet option[value="D"]').hide();
    $('#registerSet option[value="E"]').hide();
    $('#registerSet option[value="G"]').hide();
    $('#registerSet option[value="L"]').hide();
    $('#registerSet option[value="O"]').hide();
    $('#registerSet option[value="Q"]').hide();
  } else if (regLvl == '2') {
    $('#registerSet option[value="noLvl"]').hide();
    $('#registerSet option[value="G"]').hide();
    $('#registerSet option[value="L"]').hide();
    $('#registerSet option[value="O"]').hide();
    $('#registerSet option[value="Q"]').hide();
  } else if (regLvl == '3') {
    $('#registerSet option[value="noLvl"]').hide();
    $('#registerSet option[value="A"]').hide();
    $('#registerSet option[value="B"]').hide();
    $('#registerSet option[value="E"]').hide();
    $('#registerSet option[value="G"]').hide();
    $('#registerSet option[value="O"]').hide();
    $('#registerSet option[value="Q"]').hide();    
  } else if (regLvl == '4') {
    $('#registerSet option[value="noLvl"]').hide();
    $('#registerSet option[value="C"]').hide();
    $('#registerSet option[value="D"]').hide();
    $('#registerSet option[value="E"]').hide();
    $('#registerSet option[value="L"]').hide();    
  }
}

function getLevelSet() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     // document.getElementById("testDivPlsIgnore").innerHTML=xmlhttp.responseText;
     levelSet = xmlhttp.responseText;
     tableSelectorLevelSet(levelSet);
    }
  }

xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/getLvlSet.php",true);

  xmlhttp.send();
}



function tableSelectorLevelSet(lvlSet) {
   if (typeof lvlSet === 'undefined' || lvlSet == null) {
    alert("please select a level and set");
  }
  else {
     levelSet = lvlSet;
      
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("tableHere").innerHTML=xmlhttp.responseText;
    }
  }

  xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/scheduleTable.php?q1=&q2=" + levelSet,true);
  
  xmlhttp.send();
}
}


//displays the schedule for selected week and set Ajax => scheduleTable.php
function tableSelector(direction, tableId) { 
  addButtons();
  if (typeof storeLevel === 'undefined' || typeof storeSet === 'undefined') {
    getLevelSet();
  }
  else {
     levelSet = storeLevel + storeSet;
  //levelSet = storeLevel + storeSet;
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

}
//displays the schedule for last stored date and set Ajax => scheduleTable.php
function tableSelectorDate(tableId) { 
	dateUpdate();
  addButtons();
	levelSet = storeLevel + storeSet;
  var lsLength = levelSet.length;
  if(lsLength != 2) {
    levelSet = levelSet();
  }
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
      document.getElementById(destinationId).innerHTML=xmlhttp.responseText;
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
function fillFields() {
	document.getElementsByName("key")[0].value=primaryKey;
	pullField("eventname", "eventname");
	pullField("location", "location");
	pullField("instructor", "instructor");
	pullField("timefrom", "timefrom");
	pullField("timeto", "timeto");
	pullField("event_date", "event_date");
	pullField("comments", "comments");
}

//shake detection function
(function (window, document) {

    function Shake() {

        //feature detect
        this.hasDeviceMotion = 'ondevicemotion' in window;

        //default velocity threshold for shake to register
        this.threshold = 15;

        //use date to prevent multiple shakes firing
        this.lastTime = new Date();

        //accelerometer values
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        //create custom event
        if (typeof document.CustomEvent === "function") {
            this.event = new document.CustomEvent('shake', {
                bubbles: true,
                cancelable: true
            });
        } else if (typeof document.createEvent === "function") {
            this.event = document.createEvent('Event');
            this.event.initEvent('shake', true, true);
        } else { 
          return false;
        }
    }

    //reset timer values
    Shake.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //start listening for devicemotion
    Shake.prototype.start = function () {
        this.reset();
        if (this.hasDeviceMotion) { window.addEventListener('devicemotion', this, false); }
    };

    //stop listening for devicemotion
    Shake.prototype.stop = function () {

        if (this.hasDeviceMotion) { window.removeEventListener('devicemotion', this, false); }
        this.reset();
    };

    //calculates if shake did occur
    Shake.prototype.devicemotion = function (e) {

        var current = e.accelerationIncludingGravity,
            currentTime,
            timeDifference,
            deltaX = 0,
            deltaY = 0,
            deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.threshold) && (deltaY > this.threshold)) || ((deltaX > this.threshold) && (deltaZ > this.threshold)) || ((deltaY > this.threshold) && (deltaZ > this.threshold))) {
            //calculate time in milliseconds since last shake registered
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > 1000) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
            }
        }

        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;

    };

    //event handler
    Shake.prototype.handleEvent = function (e) {

        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    //create a new instance of shake.js.
    var myShakeEvent = new Shake();
    myShakeEvent && myShakeEvent.start();

}(window, document));

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
//displays a username and admin(if admin display '1') for selected entry in the database AJAX => loginUserName.php
function getLoginInfo() { 
     var xmlhttp=new XMLHttpRequest();
      xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          document.getElementById("loginInfoHere").innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/loginUserName.php", true);

      xmlhttp.send();
}

//fill user specific header buttons
function uNameButtons() { 
    //alert("uNameButtons ran");
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      //document.getElementById("testDivPlsIgnore").innerHTML=xmlhttp.responseText;
      var output = xmlhttp.responseText;
       replaceClassContent("userHeaderDiv", output);
    }
  }

xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/loginUserName.php",true);

  xmlhttp.send();
}

function logout() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     // document.getElementById("testDivPlsIgnore").innerHTML=xmlhttp.responseText;
     var logoutResponse = xmlhttp.responseText;
     alert(logoutResponse);
    }
  }

xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/logout.php",true);

  xmlhttp.send();
}
function addButtons() { 
 var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      //document.getElementById("testDivPlsIgnore").innerHTML=xmlhttp.responseText;
      var output = "";
      replaceClassContent("addbuttonDiv", output);

      var output = xmlhttp.responseText;
       replaceClassContent("addbuttonDiv", output);
     }
  }
xmlhttp.open("GET","http://okoceanfisheries.host56.com/CSTschedule/getAdminButton.php",true);

  xmlhttp.send();
}

function replaceClassContent(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}

