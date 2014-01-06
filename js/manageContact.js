$(document).ready(function() {
	$('.title').hide();
	$('#contact').click(function() {
		$('.title').hide();
		var name = $('#name').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "name="+name;
		//alert(url);
		xmlhttp.open("POST","./php/searchContact.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info != "false" && Info != "falseA") {
					$('.title').show();
					var contact = eval("("+Info+")");
					var innerCode;
					for(var i = 0; i< contact.length; i++){
						innerCode = "<tr id="+contact[i].contactId+"><td>"+contact[i].id+"</td><td>"+
						contact[i].username+"</td><td>"+contact[i].phonenumber+
						"</td><td>"+contact[i].email+"</td><td>"+contact[i].officephone+
						"</td><td>"+contact[i].position+
						"</td><td><a href=\"javascript:;\" onclick=\"javascript:delete_con("+contact[i].contactId+")\">delete</a></td>";
						$('#contactTab tbody').append(innerCode);
					}
					
				}else{
					if (Info == "falseA") {
						$('#foot').html("No contact's name match!");
					}else{
						alert(Info);
					}
				}
			}
		}
		xmlhttp.send(url);
	});
});

function delete_con (contactId) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "contactId="+contactId;
	xmlhttp.open("POST","./php/deleteContact.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var Info = xmlhttp.responseText;
			if (Info == "true") {
				$("#"+contactId).remove();
				$('#foot').append("<span>Success !</span>");
			}else{
				alert(Info);
			}
		}
	}
	xmlhttp.send(url);
}