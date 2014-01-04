<?php 
	require_once 'class.php';
	$id = $_POST['id'];
	$username = $_POST['username'];
	$phonenumber = $_POST['phonenumber'];
	$email = $_POST['email'];
	$officephone= $_POST['officephone'];
	$position = $_POST['position'];

	$management = new management();
	$management->addContact($id, $username, $phonenumber, $email, $officephone, $position);
 ?>