$(document).ready(function() {
	$('.title').hide();
	$('#customer').click(function() {
		var id = $('cusId').val();

		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url = "id="+id;
		xmlhttp.open("POST","./php/searchCustomer.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var Info = xmlhttp.responseText;
				if (Info != false) {

				}else{

				}
			}
		}
	});
});
function test (id) {
//	alert("id is: "+id);
	$('.title').show();
}