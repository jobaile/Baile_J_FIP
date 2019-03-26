<?php 
	require_once('scripts/config.php');
	
	if (isset($_GET['organ'])) {
		$data = get_single_organ($conn, $_GET['organ']);
		echo json_encode($data);
	}
	else {
		$data = get_all_organs($conn);
		echo json_encode($data);
	}
?>