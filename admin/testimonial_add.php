<?php
require_once('scripts/config.php');

//I was testing this on a separate blank folder and it was working
// Make sure everything is correct
// Set proper arrays
// FINISH THIS BY MARCH 1!!

if(isset($_REQUEST['btn_add']))
{
	try
	{
		$name	= $_REQUEST['testimonial_name'];	
			
		$image_file	= $_FILES["testimonial_file"]["name"];
		$type		= $_FILES["testimonial_file"]["type"];
		$size		= $_FILES["testimonial_file"]["size"];
		$temp		= $_FILES["testimonial_file"]["tmp_name"];
		
		$path="images/".$image_file; //set upload folder path
		
		if(empty($name)){
			$error="Please Enter Name";
		}
		else if(empty($image_file)){
			$error="Please Select Image";
		}
		else if($type=="image/jpg" || $type=='image/jpeg' || $type=='image/png' || $type=='image/gif') //check file extension
		{	
			if(!file_exists($path)) //check file not exist in your upload folder path
			{
				if($size < 6000000) //check file size 6MB
				{
					move_uploaded_file($temp, "images/" .$image_file); //move upload file temperory directory to your upload folder
				}
				else
				{
					$error="6MB Upload Limit"; //error message file size not large than 5MB
				}
			}
			else
			{	
				$error="Already Exists"; //error message file not exists your upload folder path
			}
		}
		else
		{
			$error="Please check file extension"; //error message file extension
		}
		
		if(!isset($error))
		{
			$insert_stmt=$db->prepare('INSERT INTO tbl_file(name,image) VALUES(:fname,:fimage)'); 
			$insert_stmt->bindParam(':fname',$name);	
			$insert_stmt->bindParam(':fimage',$image_file);	  
		
			if($insert_stmt->execute())
			{
				$insertMsg="File Uploaded!"; //execute query success message
				header("testimonial_all.php");
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
<title>Testimonial Adding</title>
		
</head>

	<body>
		<?php
		if(isset($error))
		{
			?>
            <div>
            	<?php echo $error;?>
            </div>
            <?php
		}
		if(isset($insertMsg)){
		?>
			<div>
				<?php echo $insertMsg;?>
			</div>
        <?php
		}
		?>   
		
			<form method="post" enctype="multipart/form-data">
					
				<div>
				<label>Name</label>
				<input type="text" name="testimonial_name" placeholder="enter name">
				</div>
					
				<div>
				<input type="file" name="testimonial_file">
				</div>

				<div>
				<input type="submit"  name="btn_add" class="btn" value="Insert">
				<a href="testimonial_all.php" class="btn">Cancel</a>
				</div>
					
			</form>
			
		</div>
		
	</div>
			
	</div>
										
	</body>
</html>