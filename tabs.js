var elements = ["portfolio", "contact"];

function showId(id) {
	var e;
	var div = document.getElementById(id);
	div.style.display = "block";

	// hide other elemets
	for (e in elements) {
		if (elements[e] != id) {
			document.getElementById(elements[e]).style.display = "none";
		}
	}

	// set cookie with active tab
	setCookie('active-tab', id, 1);
}

//~ from http://www.w3schools.com/js/js_cookies.asp
function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) +
	((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1)
				c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function checkCookie() {
	tab = getCookie('active-tab');
	if (tab != null && tab != "") {
		showId(tab);
	} else {
		setCookie('active-tab', 'portfolio', 1);
	}
}
