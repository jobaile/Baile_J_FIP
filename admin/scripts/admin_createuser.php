<?php 
	require_once('config.php');
    confirm_logged_in();
    
	if(isset($_POST['submit'])){
		//Do some preprocess for the data
		$fname = trim($_POST['fname']);
		$username = trim($_POST['username']);
		$password = trim($_POST['password']);
		$email = trim($_POST['email']);


		//Validation
		if(empty($username) || empty($password) || empty($email)){
			$message = 'Please fill the required fields';
		}else{
			$result = createUser($fname,$username,$password,$email);
			$message = $result;
		}
    }
?>