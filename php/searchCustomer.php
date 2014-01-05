<?php 
	require_once 'class.php';
	$id = $_POST['id'];
	
	$manage = new management();
	$result = $manage->searchCustomer($id);
	if (!$result) {
		return;
	}
	$customer = array();
	foreach ($result as $row) {
		$customer['id'] = $row['id'];
		$customer['username'] = $row['username'];
		$customer['phonenumber'] = $row['phonenumber'];
		$customer['email']  = $row['email'];
	}
	echo json_encode($customer);
 ?>