<?php 
	require_once 'class.php';
	$name = $_POST['name'];
	
	$manage = new management();
	$result = $manage->searchContact($name);
	if (!$result) {
		return;
	}
	echo json_encode($result);
 ?>