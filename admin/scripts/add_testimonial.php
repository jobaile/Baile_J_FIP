<?php
require_once('config.php');
include 'connect.php';
confirm_logged_in();

if(isset($_REQUEST['btn_add'])){

	$name	= $_REQUEST['testimonial_name'];	
		
	//for the image/thumbnail
	$image_file	= $_FILES["testimonial_file"]["name"];
	
	//for the video
	$video_file	= $_FILES["testimonial_video"]["name"];

	//Validation
	if(empty($name) || empty($image_file) || empty($video_file)){
		echo "<script LANGUAGE='JavaScript'>
		window.alert('Please fill in the required fields!');
		window.location.href='../../index.html#/addtestimonial';
		</script>";
		// $message = 'Please complete the form';
	}else{
		$result = createTestimonial($name, $image_file, $video_file);
		$message = $result;
	}
}
?>