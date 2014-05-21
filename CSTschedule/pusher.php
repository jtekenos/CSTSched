<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="themes/BCITTheme.min.css" />
			<link rel="stylesheet" href="themes/jquery.mobile.icons.min.css" />
			<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile.structure-1.4.2.min.css" />
			<link rel="stylesheet" href="Style.css" />
			<style type="text/css">
			@-moz-document url-prefix() {
					.linkSpan {
					  position:absolute; 
					  width:7%;
					  height:10%;
					  left:auto;
					  top:auto;
					  z-index: 1;

					  background-image: url('empty.gif');
					}
			}
			</style>
			<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
			<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
			<script src="http://jquery.bassistance.de/validate/jquery.validate.js"></script>
			<script src="http://jquery.bassistance.de/validate/additional-methods.js"></script>
			<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
			<script src="realtime-notifications/src/lib/gritter/js/jquery.gritter.min.js"></script>
			<link href="realtime-notifications/src/lib/gritter/css/jquery.gritter.css"rel="stylesheet" type="text/css" />
			<script src="http://js.pusher.com/2.2/pusher.min.js"></script>
			<script src="realtime-notifications/src/PusherNotifier.js"></script>
			<script src="functionsPusher.js"></script> 
		<meta charset="UTF-8">
		<title>CST Schedule</title>
	</head>
	<body>

		<!-- ************************INDEX PAGE*************************** -->
		<div id="index" data-role="page">

			<div id="header" data-role="header">
				<img src="Logo.jpg" width="316" height="100" alt="CST Schedule"/>
			</div><!-- /header -->

			<div role="main" class="ui-content">
				<div id="levelCollapsible" data-role="collapsible" data-theme="b" data-content-theme="b">
				    <h4 ><span id="lvlHeader">Level</span></h4>
				    <button id="lvl1" class="ui-btn ui-btn-a" value="1" onClick="menuSelector('lvl1', 'lvlHeader'); getLevel('lvl1')">Level 1</button>
				    <button id="lvl2" class="ui-btn ui-btn-a" value="2" onClick="menuSelector('lvl2', 'lvlHeader'); getLevel('lvl2')">Level 2</button>
				    <button id="lvl3" class="ui-btn ui-btn-a" value="3" onClick="menuSelector('lvl3', 'lvlHeader'); getLevel('lvl3')">Level 3</button>
				    <button id="lvl4" class="ui-btn ui-btn-a" value="4" onClick="menuSelector('lvl4', 'lvlHeader'); getLevel('lvl4')">Level 4</button>
				</div>
				<div data-role="collapsible" id="setCollapsible" data-theme="b" data-content-theme="b">
				    <h4><span id="setHeader">Set</span></h4>
				    <button id="setA" class="ui-btn ui-btn-a" value="A" onClick="menuSelector('setA', 'setHeader'); getSet('setA'); collapseSet()">Set A</button>
				    <button id="setB" class="ui-btn ui-btn-a" value="B" onClick="menuSelector('setB', 'setHeader'); getSet('setB'); collapseSet()">Set B</button>
				    <button id="setC" class="ui-btn ui-btn-a" value="C" onClick="menuSelector('setC', 'setHeader'); getSet('setC'); collapseSet()">Set C</button>
				    <button id="setD" class="ui-btn ui-btn-a" value="D" onClick="menuSelector('setD', 'setHeader'); getSet('setD'); collapseSet()">Set D</button>
				    <button id="setE" class="ui-btn ui-btn-a" value="E" onClick="menuSelector('setE', 'setHeader'); getSet('setE'); collapseSet()">Set E</button>
				    <button id="setG" class="ui-btn ui-btn-a" value="G" onClick="menuSelector('setG', 'setHeader'); getSet('setG'); collapseSet()">Set G</button>
				    <button id="setL" class="ui-btn ui-btn-a" value="L" onClick="menuSelector('setL', 'setHeader'); getSet('setL'); collapseSet()">Set L</button>
				    <button id="setO" class="ui-btn ui-btn-a" value="O" onClick="menuSelector('setO', 'setHeader'); getSet('setO'); collapseSet()">Set O</button>
				    <button id="setQ" class="ui-btn ui-btn-a" value="Q" onClick="menuSelector('setQ', 'setHeader'); getSet('setQ'); collapseSet()">Set Q</button>
				</div>
				<a href="#schedule" onclick="tableSelector('current', 'tableHere')"id="GetScheduleButton" class=" ui-btn ui-btn-a ui-shadow ui-corner-all" data-form="ui-btn-up-a" data-theme="a" data-transition="pop">Get Schedule</a>
				<div id="twitterFeedDiv">
					<div id="twitterFeedWrapper">
					<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/CSTSchedule" data-widget-id="467345651915694082" data-chrome="transparent" data-tweet-limit="5">Tweets by @CSTSchedule</a>
					<script>
						!function(d,s,id) {
							var js,fjs=d.getElementsByTagName(s)[0],
								p=/^http:/.test(d.location)?'http':'https';
							if(!d.getElementById(id)) {
								js=d.createElement(s);
								js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
								fjs.parentNode.insertBefore(js,fjs);
							}
						}
						(document,"script","twitter-wjs");
					</script>
					</div>
				</div>
				<section>
					<div>Connection status: <span id="conn_status"></span></div>
				</section>
				<section id="cstPusher">
					words
				</section>
				<section id="">
					MORE WORDS WHY
				</section>
			</div><!-- /content -->

			<div id="footer" data-role="footer">

				<div class="footerButtons">
					<div id="loginButtonDiv">
					<a href="LoginForm.php" id="LoginButton" class=" ui-btn ui-btn-a ui-shadow ui-corner-all" data-form="ui-btn-up-a" data-theme="a" data-transition="pop">Login</a>
					</div>
					<div id="registerButtonDiv2">
					<a href="registerForm.php" id="RegisterButton" class=" ui-btn ui-btn-a ui-shadow ui-corner-all" data-form="ui-btn-up-a" data-theme="a" data-transition="pop">Register</a>
					</div>

				</div>

			</div>
		</div><!--page -->

<?php

require_once('realtime-notifications/examples/php/lib/squeeks-Pusher-PHP/lib/Pusher.php');

$app_key = '39df1a92e712efa11685';
$app_secret = 'e52643f3259b0af9929a';
$app_id = '75107';

$pusher = new Pusher($app_key, $app_secret, $app_id);
$data = array('message' => 'This is an HTML5 Realtime Push Notification!');
$pusher->trigger('my_notifications', 'notification', $data);
?>