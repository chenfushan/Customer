$(document).ready(function() {
	$('.title').hide();
	$('#customer').click(function() {
		var id = $('#id').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "id="+id;
//		alert(url);
		xmlhttp.open("POST","./php/searchCustomer.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
//				alert(Info);
				if (Info != "false" && Info != "falseA") {
					$('#title').show();
					var customer = eval("("+Info+")");
					var innerCode;
					for (var key in customer) {
						var value = customer[key];
						innerCode = innerCode+"<td>"+value+"</td>";
					}
					innerCode = innerCode+"<td><a href=\"javascript:;\" onclick=\"javascript:delete_cus("+id+")\">delete</a></td>";
					$('#info').html(innerCode);
				}else{
					if (Info == "falseA") {
						$('#foot').html("No one's id is "+id);
					}else{
						alert(Info);
					}
				}
			}
		}
		xmlhttp.send(url);
	});
	$('#company').click(function() {
		var id = $('#id').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "id="+id;
//		alert(url);
		xmlhttp.open("POST","./php/searchCompany.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info != "false" && Info != "falseA") {
					$('#ctitle').show();
					var company = eval("("+Info+")");
					var innerCode;
					for (var key in company) {
						var value = company[key];
						innerCode = innerCode+"<td>"+value+"</td>";
					}
					innerCode = innerCode+"<td><a href=\"javascript:;\" onclick=\"javascript:delete_com("+id+")\">delete</a></td>";
					$('#info').html(innerCode);
				}else{
					if (Info == "falseA") {
						$('#foot').html("No company's id is "+id);
					}else{
						alert(Info);
					}
				}
			}
		}
		xmlhttp.send(url);
	});
});
function delete_cus (id) {
	var choice = confirm("Are you sure?");
	if (choice == true) {
	}else{
		return ;
	}
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "id="+id;
//	alert(url);
	xmlhttp.open("POST","./php/deleteCustomer.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var Info = xmlhttp.responseText;
			if (Info == "true") {
				$('#info td').remove();
				$('#info').html("successful ~");
			}else{
				alert(Info);
			}
		}
	}
	xmlhttp.send(url);
}
function delete_com (id) {
	var choice = confirm("Are you sure?");
	if (choice == true) {
	}else{
		return ;
	}
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url = "id="+id;
//	alert(url);
	xmlhttp.open("POST","./php/deleteCompany.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var Info = xmlhttp.responseText;
			if (Info == "true") {
				$('#info td').remove();
				$('#info').html("successful ~");
			}else{
				alert(Info);
			}
		}
	}
	xmlhttp.send(url);
}