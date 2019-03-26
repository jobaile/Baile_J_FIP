<?php

function createUser($fname,$username,$password,$email){
  include('connect.php');

  $create_user_query = 'INSERT INTO tbl_user(user_fname,user_name,user_pass,user_email)';
  $create_user_query .= ' VALUES(:fname,:username,:password,:email)';

  $create_user_set = $pdo->prepare($create_user_query);
  $create_user_set->execute(
    array(
      ':fname'=>$fname,
      ':username'=>$username,
      ':password'=>$password,
      ':email'=>$email
    )
  );

  if($create_user_set->rowCount()){
    echo "<script LANGUAGE='JavaScript'>
    window.alert('Succesfully Updated');
    window.location.href='../../index.html#/adduser';
    </script>";
  }else{
    // echo "<script LANGUAGE='JavaScript'>
    // window.alert('You are missing some required fields!);
    // window.location.href='../../index.html#/adduser';
    // </script>";  
  }
}

function get_single_organ($pdo, $organ) {
  include('connect.php');
  $query = "SELECT * FROM tbl_organs WHERE id = '$organ'";

  $get_video = $pdo->query($query);
  $results = array();

  while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
  }

  return $results;
}

function get_all_organs($pdo) {
  include('connect.php');
  $query = "SELECT * FROM tbl_organs";

  $get_video = $pdo->query($query);
  $results = array();

  while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
  }

  return $results;
}

function get_single_testimonial($pdo, $testimonial) {
  include('connect.php');
  $query = "SELECT * FROM tbl_testimonial WHERE t_id = '$testimonial'";

  $get_video = $pdo->query($query);
  $results = array();

  while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
  }

  return $results;
}

function get_all_testimonials($pdo) {
  include('connect.php');
  $query = "SELECT * FROM tbl_testimonial";

  $get_video = $pdo->query($query);
  $results = array();

  while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
  }

  return $results;
}

function createTestimonial($name, $image_file, $video_file){
  include('connect.php');
  $typeimg	= $_FILES["testimonial_file"]["type"];
  $sizeimg	= $_FILES["testimonial_file"]["size"];
  $tempimg	= $_FILES["testimonial_file"]["tmp_name"];

  $typevid	= $_FILES["testimonial_video"]["type"];
  $sizevid	= $_FILES["testimonial_video"]["size"];
  $tempvid	= $_FILES["testimonial_video"]["tmp_name"];

  $imagepath= "../../images/testimonials/".$image_file; //where the image will be uploaded
  $videopath= "../../videos/testimonials/".$video_file; //where the vide will be uploaded
  
    if(empty($name)){
      echo "<script LANGUAGE='JavaScript'>window.alert('Please enter a name.');</script>";
    } else if(empty($image_file)){
      echo "<script LANGUAGE='JavaScript'>window.alert('Please select an image');</script>";
    } else if($typeimg == "image/jpg" || $typeimg == 'image/jpeg' || $typeimg == 'image/png' || $typeimg == 'image/gif') //allowed file extensions
    {	
      if(!file_exists($imagepath)) //ensures that the file does not exist
      {
        if($sizeimg < 6000000) { //6mb file size
          move_uploaded_file($tempimg, "../../images/testimonials/" .$image_file); //move upload file temperory directory to your upload folder
        } else {
          echo "<script LANGUAGE='JavaScript'>window.alert('6MB Upload Limit!');</script>";
          // $error="6MB Upload Limit"; //error message file size not large than 6MB
        }
      } else {	
        echo "<script LANGUAGE='JavaScript'>window.alert('Image Already Exists');</script>";
        // $error="Image Already Exists"; //error message file not exists your upload folder path
      }
    } else {
      echo "<script LANGUAGE='JavaScript'>window.alert('Please check file extension');</script>";
      // $error="Please check file extension"; 
    }
    
    if(empty($video_file)){
      echo "<script LANGUAGE='JavaScript'>window.alert('Please select a video.');</script>";
		} else if($typevid == "video/mp4" || $typevid == 'video/mpeg' || $typevid == 'video/ogg' || $typevid == 'video/webm') //allowed file extensions
		{	
			if(!file_exists($videopath)) //ensures that the file does not exist
			{
				if($sizevid < 10000000) { //10mb file size
					move_uploaded_file($tempvid, "../../video/testimonials/" .$video_file); 
				} else {
          echo "<script LANGUAGE='JavaScript'>window.alert('15mb upload limit');</script>";
					// $error="15MB Upload Limit"; 
				}
			} else {	
        echo "<script LANGUAGE='JavaScript'>window.alert('Video Already Exists');</script>";
			}
		} else {
      echo "<script LANGUAGE='JavaScript'>window.alert('Please check file extension');</script>";
    } 
    
    if(!isset($error)) {
			$insert_testimonial='INSERT INTO tbl_testimonial(t_name, t_pic, t_vid) VALUES(:tname,:timage, :tvideo)'; //sql insert query					
			$insert_testimonial_set = $pdo->prepare($insert_testimonial);
			$insert_testimonial_set->execute(
				array(
					':tname'=>$name,
					':timage'=>$image_file,
					':tvideo'=>$video_file,
				)
			);

			if($insert_testimonial_set->rowCount()){
				echo "<script LANGUAGE='JavaScript'>
				window.alert('Testimonial Added!');
				window.location.href='../../index.html#/addtestimonial';
				</script>";
			  } else {
				  redirect_to('Location: index.html');
			  }
		}
}