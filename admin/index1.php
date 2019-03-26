<?php
	require_once "scripts/connect.php";
    //require_once('scripts/config.php');
    
    if(isset($_REQUEST['delete_id']))
	{
		// select image from db to delete
		$id=$_REQUEST['delete_id'];	//get delete_id and store in $id variable
		
		$select_stmt= $pdo->prepare('SELECT * FROM tbl_file WHERE id =:id');	//sql select query
		$select_stmt->bindParam(':id',$id);
		$select_stmt->execute();
		$row=$select_stmt->fetch(PDO::FETCH_ASSOC);
		unlink("../../images/".$row['image']); //unlink function permanently remove your file
		
		//delete an orignal record from db
		$delete_stmt = $pdo->prepare('DELETE FROM tbl_file WHERE id =:id');
		$delete_stmt->bindParam(':id',$id);
		$delete_stmt->execute();
		
		header("Location:index.php");
	}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=2.0">
<title>Testimonials</title>
		
</head>

	<body>
	
	<div class="container">
        <ul>
            <a href="testimonial_add.php">Add A File</a>
        </ul>

        <?php
            $select_stmt=$pdo->prepare("SELECT * FROM tbl_file");	//sql select query
            $select_stmt->execute();
            while($row=$select_stmt->fetch(PDO::FETCH_ASSOC))
            {
		?>

        <p><?php echo $row['name']; ?></p>
        <img src="../images/<?php echo $row['image']; ?>" width="100px" height="60px">
        <a href="testimonial_edit.php?update_id=<?php echo $row['id']; ?>" class="btn">Edit</a>
        <a href="?delete=<?php echo $row['id']; ?>" class="btn">Delete</a>

        <?php
        }
        ?>
    </div>
		

									
	</body>
</html>