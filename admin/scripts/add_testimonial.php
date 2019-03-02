<?php
require_once('config.php');
include 'connect.php';

if(isset($_REQUEST['btn_add']))
{
	try
	{
		$name	= $_REQUEST['testimonial_name'];	
			
		$image_file	= $_FILES["testimonial_file"]["name"];
		$type		= $_FILES["testimonial_file"]["type"];
		$size		= $_FILES["testimonial_file"]["size"];
		$temp		= $_FILES["testimonial_file"]["tmp_name"];
		
		$path="../../images/".$image_file; //where the image will be uploaded
		
		if(empty($name)){
			$error="Please Enter A Name";
		}
		else if(empty($image_file)){
			$error="Please Select An Image";
		}
		else if($type=="image/jpg" || $type=='image/jpeg' || $type=='image/png' || $type=='image/gif') //allowed file extensions
		{	
			if(!file_exists($path)) //ensures that the file does not exist
			{
				if($size < 6000000) //check file size 6MB
				{
					move_uploaded_file($temp, "../../images/" .$image_file); //move upload file temperory directory to your upload folder
				}
				else
				{
					$error="6MB Upload Limit"; //error message file size not large than 5MB
				}
			}
			else
			{	
				$error="File Already Exists"; //error message file not exists your upload folder path
			}
		}
		else
		{
			$error="Please check file extension"; //error message file extension
		}
		
		if(!isset($error))
		{
			$insert_stmt='INSERT INTO tbl_file(name,image) VALUES(:fname,:fimage)'; //sql insert query					
			$insert_stmt_set = $pdo->prepare($insert_stmt);
			$insert_stmt_set->execute(
				array(
					':fname'=>$name,
					':fimage'=>$image_file
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