<?php 
	require_once 'class.php';
	$id = $_POST['id'];

	$manage = new management();
	$manage->deleteCustomer($id);
 ?>