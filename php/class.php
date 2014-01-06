<?php 
	/**
	* class Management
	* we can use add and add company
	* and search customer and contacts
	*/
	class management
	{
		//contruct of the management
		function __construct()
		{
		}
		/*
		* add customer to database
		* @param username(string), phonenumber(string), email(string)
		* @return boolean
		*/
		public function addCustomer($username, $phonenumber, $email)
		{
			//translate the username to security type
			$username = addslashes($username);
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//insert the customer's information to database
			$result = $db->query("insert into customer(username, phonenumber, email)
				 values('".$username."','".$phonenumber."','".$email."');");
			//return if the insert operation success or fail
			if (!$result) {
				echo "falseA";
				return false;
			}else{
				echo "true";
			}
		}
		/*
		* add company user 
		* @param company name, phonenumber, email
		* @return boolean
		*/
		public function addEnterprise($company, $phonenumber, $email)
		{
			$company = addslashes($company);
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//insert the customer's information to database
			$result = $db->query("insert into company(company, phonenumber, email) 
				 values('".$company."','".$phonenumber."','".$email."');");
			if (!$result) {
				echo "false";
				return false;
			}else{
				//if insert successfully
				//return the primary key (id)
				$companyId = $db->insert_id;
				echo $companyId;
			}
		}
		/*
		* add contact to database
		* @param id, username, phonenubmer, email, officephone, position
		*/
		public function addContact($id, $username, $phonenumber, $email, $officephone, $position)
		{
			$username = addslashes($username);
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//insert the contact to database
			$result = $db->query("insert into contacts(id, username, phonenumber, email,
				officephone, position) values('".$id."','".$username."','".$phonenumber."',
				'".$email."','".$officephone."','".$position."');");
			//return if the operation success
			if (!$result) {
				echo "falseA";
				return false;
			}else{
				echo "true";
			}
		}
		/*
		* search customer form database
		* @param id
		* @return Array (customer's information)
		*/
		public function searchCustomer($id)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//select the customer's information from database
			$result = $db->query("select id,username,phonenumber,email from customer where id='".$id."';");
			if (!$result) {
				//if operate the database error return false
				echo "false";
				return false;
			}else{
				//if it is not in database
				if ($result->num_rows == 0) {
					echo "falseA";
					return false;
				}
				//search success 
				$result = $mySql->resultToArray($result);
				return $result;
			}
		}
		/*
		* search company user from database
		* @param id
		* @return array/boolean
		*/
		public function searchCompany($id)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//select the company information from database
			$result = $db->query("select id,company,phonenumber,email from company where id='".$id."';");
			if (!$result) {
				//if operate database error, return false
				echo "false";
				return false;
			}else{
				//if id is not in database
				//return falseA to front
				if ($result->num_rows == 0) {
					echo "falseA";
					return false;
				}
				//if successful select
				//translate the return to array and return
				$result = $mySql->resultToArray($result);
				return $result;
			}
		}
		//delete customer from database
		//@param id
		//@return boolean
		public function deleteCustomer($id)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//execute the delete query
			$result = $db->query("delete from customer where id='".$id."';");
			if (!$result) {
				//if operate error return false
				echo "false";
				return false;
			}else{
				//return true if success
				echo "true";
				return true;
			}
		}
		/*
		* delete company user
		* @param id
		* @return boolean
		*/
		public function deleteCompany($id)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//delete query
			$result = $db->query("delete from company where id='".$id."';");
			if (!$result) {
				echo "false";
				return false;
			}else{
				echo "true";
				return true;
			}
		}
		/*
		* search contact from database
		* @param name
		* @return Array/boolean
		*/
		public function searchContact($name)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//select contact's information from database
			$result = $db->query("select id, contactId, username, phonenumber, email, officephone, position from contacts where username like '%".$name."%';");
			//if execute the query error, return false
			if (!$result) {
				echo "false";
				return false;
			}else{
				//if select empty return false, falseA to front
				if ($result->num_rows == 0) {
					echo "falseA";
					return false;
				}
				//if select successfully, translate the database return to array and return
				$result = $mySql->resultToArray($result);
				return $result;
			}
		}

		/*
		* delete contact from database
		* @param contactId
		* @return boolean
		*/
		public function deleteContact($contactId)
		{
			//connect to database
			$mySql = new MySQL();
			$db = $mySql->dbConnect();
			//execute the delete query
			$result = $db->query("delete from contacts where contactId='".$contactId."';");
			//return execute result
			if (!$result) {
				echo "false";
				return false;
			}else{
				echo "true";
				return true;
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
			//connect to database
			$result = new mysqli('localhost','chen','chenfushan','customer');
			//connect error
			if (!$result) {
				return false;
			}
			$result->autocommit(TRUE);
			return $result;
		}
		/*
		* translate the database result to array
		* @param result
		* @return array
		*/
		public function resultToArray($result)
		{
			$resArray = array();
			//transval the database result
			//give the value to resArray
			for ($count=0; $row = $result->fetch_assoc(); $count++) { 
				$resArray[$count] = $row;
			}
			return $resArray;
		}
	}
 ?>