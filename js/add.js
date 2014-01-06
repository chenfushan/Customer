$(document).ready(function() {
	$('#customer').click(function() {
		var username = $('#username').val();
		var phonenumber = $('#phonenumber').val();
		var email = $('#email').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "username="+username+"&phonenumber="+phonenumber+"&email="+email;
		xmlhttp.open("POST","./php/add.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info != "false") {
					$("#foot").html("Successfully");
					document.forms[0].reset();
				}else{
					alert(Info);
				}
			}
		}
		xmlhttp.send(url);
	});
	$('#enterprise').click(function() {
		var company = $('#username').val();
		var phonenumber = $('#phonenumber').val();
		var email = $('#email').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "company="+company+"&phonenumber="+phonenumber+"&email="+email;
		xmlhttp.open("POST","./php/addEnterprise.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info != "false") {
					$("#foot").html("Successfully\n"+"Your id is: "+Info);
					document.forms[0].reset();
				}else{
					alert(Info);
				}
			}
		}
		xmlhttp.send(url);
	});

});