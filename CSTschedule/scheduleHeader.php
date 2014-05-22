<?php
	session_start();
	if($_SESSION['SESS_admin']=='1'){
		echo "<a href=\"#index\" id=\"backButton\"><img src=\"homeButton.jpg\" width=\"45\" height=\"45\" alt=\"Home\" data-transition=\"pop\"/></a>
				<div class=\"userHeaderDiv\">
					<a href=\"#profile\" id=\"UserHeaderButton\" class=\" ui-btn ui-btn-a ui-icon-gear ui-btn-icon-left ui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">".$_SESSION['SESS_LOGIN_NAME']."</a>
				</div>
				<div>
					<a href=\"#add\" id=\"addButton\" class=\" ui-btn ui-btn-aui-shadow ui-corner-all\" data-form=\"ui-btn-up-a\" data-theme=\"a\" data-transition=\"pop\">Add</a>
				</div>";
	} else {
		echo "<a href=\"#index\" id=\"backButton\"><img src=\"homeButton.jpg\" width=\"45\" height=\"45\" alt=\"Home\" data-transition=\"pop\"/></a>";
	}
?>