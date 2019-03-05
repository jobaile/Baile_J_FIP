<?php
require_once('config.php');
include 'connect.php';
confirm_logged_in();

if(isset($_REQUEST['btn_add']))
{
	try
	{
		$name	= $_REQUEST['testimonial_name'];	
			
		$image_file	= $_FILES["testimonial_file"]["name"];
		$typeimg	= $_FILES["testimonial_file"]["type"];
		$sizeimg	= $_FILES["testimonial_file"]["size"];
		$tempimg	= $_FILES["testimonial_file"]["tmp_name"];
		
		$video_file	= $_FILES["testimonial_video"]["name"];
		$typevid	= $_FILES["testimonial_video"]["type"];
		$sizevid	= $_FILES["testimonial_video"]["size"];
		$tempvid	= $_FILES["testimonial_video"]["tmp_name"];
		
		$imagepath= "../../images/testimonials/".$image_file; //where the image will be uploaded
		$videopath= "../../videos/testimonials/".$video_file; //where the image will be uploaded

		if(empty($name)){
			$error="Please Enter A Name"; //Name for the Testimonial
		} else if(empty($image_file)){
			$error="Please Select An Image"; //Image for the Testimonial
		} else if($typeimg == "image/jpg" || $typeimg == 'image/jpeg' || $typeimg == 'image/png' || $typeimg == 'image/gif') //allowed file extensions
		{	
			if(!file_exists($imagepath)) //ensures that the file does not exist
			{
				if($sizeimg < 6000000) { //6mb file size
					move_uploaded_file($tempimg, "../../images/testimonials/" .$image_file); //move upload file temperory directory to your upload folder
				} else {
					$error="6MB Upload Limit"; //error message file size not large than 5MB
				}
			} else {	
				$error="Image Already Exists"; //error message file not exists your upload folder path
			}
		} else {
			$error="Please check file extension"; 
		} 

		if(empty($video_file)){
			$error="Please Select A Video"; //Image for the Testimonial
		} else if($typevid == "video/mp4" || $typevid == 'video/mpeg' || $typevid == 'video/ogg' || $typevid == 'video/webm') //allowed file extensions
		{	
			if(!file_exists($videopath)) //ensures that the file does not exist
			{
				if($sizevid < 80000000) { //80mb file size
					move_uploaded_file($tempvid, "../../videos/testimonials/" .$video_file); 
				} else {
					$error="80MB Upload Limit"; 
				}
			} else {	
				$error="Video Already Exists"; 
			}
		} else {
			$error="Please check file extension"; 
		} 

		if(!isset($error))
		{
			$insert_testimonial='INSERT INTO tbl_file(name, image, video) VALUES(:tname,:timage, :tvideo)'; //sql insert query					
			$insert_testimonial_set = $pdo->prepare($insert_testimonial);
			$insert_testimonial_set->execute(
				array(
					':tname'=>$name,
					':timage'=>$image_file,
					':tvideo'=>$video_file,
				)
			);
            
            // this is creating an error when uploading a new testimonial
            //  uploading is working though - need to find a way to redirect user after successful upload
			// if($insert_stmt->execute())
			// {
			// 	$insertMsg="File Uploaded!"; 
			// }
		}
	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}
}
?>