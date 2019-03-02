<?php
require_once('scripts/config.php');
confirm_logged_in();

if(isset($_REQUEST['update_id']))
{
	try
	{
		$id = $_REQUEST['update_id']; //get "update_id" from index.php page through anchor tag operation and store in "$id" variable
		$select_query = $db->prepare('SELECT * FROM tbl_file WHERE id =:id'); //sql select query
		$select_query->bindParam(':id',$id);
		$select_query->execute(); 
		$row = $select_query->fetch(PDO::FETCH_ASSOC);
		extract($row);
	}
	catch(PDOException $e)
	{
		$e->getMessage();
	}
	
}

if(isset($_REQUEST['btn_update']))
{
	try
	{
		$name	=$_REQUEST['testimonial_name'];	//textbox name "txt_name"
		
		$image_file	= $_FILES["testimonial_file"]["name"];
		$type		= $_FILES["testimonial_file"]["type"];	//file name "txt_file"
		$size		= $_FILES["testimonial_file"]["size"];
		$temp		= $_FILES["testimonial_file"]["tmp_name"];
			
		$path="images/".$image_file; //set upload folder path
		
		$directory="images/"; //set upload folder path for update time previous file remove and new file upload for next use
		
		if($image_file)
		{
			if($type=="image/jpg" || $type=='image/jpeg' || $type=='image/png' || $type=='image/gif') //check file extension
			{	
				if(!file_exists($path)) //check file not exist in your upload folder path
				{
					if($size < 5000000) //check file size 5MB
					{
						unlink($directory.$row['image']); //unlink function remove previous file
						move_uploaded_file($temp, "images/" .$image_file);	//move upload file temperory directory to your upload folder	
					}
					else
					{
						$errorMsg="Your File To large Please Upload 5MB Size"; //error message file size not large than 5MB
					}
				}
				else
				{	
					$errorMsg="File Already Exists...Check Upload Folder"; //error message file not exists your upload folder path
				}
			}
			else
			{
				$errorMsg="Upload JPG, JPEG, PNG & GIF File Formate.....CHECK FILE EXTENSION"; //error message file extension
			}
		}
		else
		{
			$image_file=$row['image']; //if you not select new image than previous image sam it is it.
		}
	
		if(!isset($errorMsg))
		{
			$update_stmt=$db->prepare('UPDATE tbl_file SET name=:name_up, image=:file_up WHERE id=:id'); //sql update query
			$update_stmt->bindParam(':name_up',$name);
			$update_stmt->bindParam(':file_up',$image_file);	//bind all parameter
			$update_stmt->bindParam(':id',$id);
			 
			if($update_stmt->execute())
			{
				$updateMsg="File Update Successfully.......";	//file update success message
				header("refresh:3;index.php");	//refresh 3 second and redirect to index.php page
			}
		}
	}
	catch(PDOException $e)
	{
		echo $e->getMessage();
	}
	
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">
<title>Upload Files</title>
		
		
</head>

	<body>
	
	<form method="post" enctype="multipart/form-data">
					
		<div>
		<label>Name</label>
		<input type="text" name="testimonial_name" value="<?php echo $name; ?>" required>
		</div>
			
			
		<div>
		<label>File</label>
		<input type="file" name="testimonial_file" value="<?php echo $image; ?>"/>
		<p><img src="images/<?php echo $image; ?>" height="100" width="100" /></p>
		</div>
			
			
		<div>
		<input type="submit"  name="btn_update" value="Update">
		<a href="index.php" class="btn">Cancel</a>
		</div>
		</div>
					
	</form>

										
	</body>
</html>