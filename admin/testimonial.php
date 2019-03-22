<?php 
    require_once('scripts/config.php');
    
	if (isset($_GET['testimonial'])) {
		$data = get_single_testimonial($conn, $_GET['testimonial']);
		echo json_encode($data);
	}
	else {
		$data = get_all_testimonials($conn);
		echo json_encode($data);
	}
?>