$(document).ready(function() {
	$('#customer').click(function() {
		var username = $('#username').val();
		var password = $('#password').val();

		var xmlhttp;
		if (window.XMLHTTPRequest) {
			xmlhttp = new XMLHTTPRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "username="+username+"&password="+password;
		xmlhttp.open("POST","./php/customerLogin.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	});
});