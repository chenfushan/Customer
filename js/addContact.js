$(document).ready(function() {
	$('#contact').click(function() {
		var id = $('#id').val();
		var username = $('#username').val();
		var phonenumber = $('#phonenumber').val();
		var email = $('#email').val();
		var officephone = $('#officephone').val();
		var position = $('#position').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "id="+id+"&username="+username+"&phonenumber="+phonenumber+"&email="+email+
		"&officephone="+officephone+"&position="+position;
		xmlhttp.open("POST","./php/addContact.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info == "true") {
					$("#foot").html("Successfully");
					document.forms[0].reset();
				}else{
					alert(Info);
				}
			}
		}
		xmlhttp.send(url);
	});
});