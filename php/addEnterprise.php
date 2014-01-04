<?php 
	require_once 'class.php';
	$company = $_POST['company'];
	$phonenumber = $_POST['phonenumber'];
	$email = $_POST['email'];

	$management = new management();
	$management->addEnterprise($company, $phonenumber, $email);
 ?>