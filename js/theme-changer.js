<div class="collapse navbar-collapse" id="nav-header">
	<ul class="nav navbar-nav navbar-right">
	    <li class="dropdown">
	        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Theme Change Test<b class="caret"></b></a>
	        <ul class="dropdown-menu">
	            <li><a href="setTheme.php?theme=dark">Dark</a></li>
	            <li><a href="setTheme.php?theme=light">Light</a></li>
	        </ul>
	    </li>
	</ul>
</div>

<SCRIPT LANGUAGE="JavaScript">
	function setCookie(ctheme, cdark, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = ctheme + "=" + cdark + "; " + expires;
	} 

	function getCookie(ctheme) {
	    var theme = ctheme + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(theme) != -1) return c.substring(theme.length,c.length);
	    }
	    return "";
	} 

	function checkCookie() {
    var username=getCookie("username");
    if (username!="") {
        alert("Welcome again " + username);
    }else{
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
} 
</SCRIPT>
