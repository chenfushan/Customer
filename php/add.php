<?php 
	require_once 'class.php';
	$username = $_POST['username'];
	$phonenumber = $_POST['phonenumber'];
	$email = $_POST['email'];

	$management = new management();
	$management->addCustomer($username, $phonenumber, $email);
 ?>