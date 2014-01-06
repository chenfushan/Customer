<?php 
	require 'class.php';
	$contactId = $_POST['contactId'];

	$manage = new management();
	$manage->deleteContact($contactId);
 ?>