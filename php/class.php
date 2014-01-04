<?php 
	/**
	* class Management
	* we can use add and add company
	* and search customer and contacts
	*/
	class management
	{
		function __construct()
		{
		}
		public function addCustomer($username, $phonenumber, $email)
		{
			$username = addslashes($username);
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			$result = $db->query("insert into customer(username, phonenumber, email)
				 values('".$username."','".$phonenumber."','".$email."');");
			if (!$result) {
				echo "falseA";
				return false;
			}else{
				echo "true";
			}
		}
		public function addEnterprise($company, $phonenumber, $email)
		{
			$company = addslashes($company);
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			$result = $db->query("insert into company(company, phonenumber, email) 
				 values('".$company."','".$phonenumber."','".$email."');");
			if (!$result) {
				echo "false";
				return false;
			}else{
				$companyId = $db->insert_id;
				echo $companyId;
			}
		}
		public function addContact($id, $username, $phonenumber, $email, $officephone, $position)
		{
			$username = addslashes($username);
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			$result = $db->query("insert into contacts(id, username, phonenumber, email,
				officephone, position) values('".$id."','".$username."','".$phonenumber."',
				'".$email."','".$officephone."','".$position."');");
			if (!$result) {
				echo "falseA";
				return false;
			}else{
				echo "true";
			}
		}
	}
	/**
	* class MySQL
	* connect mysql and translate database result to array
	*/
	class MySQL
	{
		
		function __construct()
		{
		}
		public function dbConnect()
		{
			$result = new mysqli('localhost','chen','chenfushan','customer');
			if (!$result) {
				return false;
			}
			$result->autocommit(TRUE);
			return $result;
		}
		public function resultToArray($result)
		{
			$resArray = array();
			for ($count=0; $row = $result->fetch_assoc(); $count++) { 
				$resArray[$count] = $row;
			}
			return $resArray;
		}
	}
 ?>