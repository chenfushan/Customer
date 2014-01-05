<?php 
	require_once 'class.php';
	$id = $_POST['id'];
	
	$manage = new management();
	$result = $manage->searchCompany($id);
	if (!$result) {
		return;
	}
	$company = array();
	foreach ($result as $row) {
		$company['id'] = $row['id'];
		$company['company'] = $row['company'];
		$company['phonenumber'] = $row['phonenumber'];
		$company['email']  = $row['email'];
	}
	echo json_encode($company);
 ?>