<?php 

function getAllUsers($tbl){
	include('connect.php');

	//TODO: fill the following variable with a SQL query
	// that fetching all info from the given table $tbl
	$queryAll = 'SELECT * FROM '.$tbl;

	$runAll = $pdo->query($queryAll);

	if($runAll){
		return $runAll;
	}else{
		$error = 'There was a problem accessing this info';
		return $error;
	}
}


function getSingleUser($tbl, $col, $value){
	include('connect.php');
	$querySingle = 'SELECT * FROM '.$tbl.' WHERE '.$col.' = '.$value;

	$runSingle = $pdo->query($querySingle);
	if($runSingle){
		return $runSingle;
	}else{
		$error = 'There was a problem';
		return $error;
	}
}

