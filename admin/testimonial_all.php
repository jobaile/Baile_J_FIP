<?php
	//require_once "connection.php";
    require_once('scripts/config.php');
    
	// if(isset($_REQUEST['delete']))
	// {
	// 	$id = $_REQUEST['delete'];
		
    //     $testimonialQuery= $db->prepare('SELECT * FROM tbl_file WHERE id =:id');
    //     $get_test_set->execute(
	// 		array(
	// 			':id'=>$id
	// 		)
    //     );
        
    //     $get_test_set = $pdo->prepare($testimonialQuery);
	// 	$row = $testimonialQuery->fetch(PDO::FETCH_ASSOC);
	// 	unlink("images/".$row['image']); // this is going to delete it!
		
    //     //Deletes from the DATABASE
    //     // FIGURE OUT WHY IT'S NOT DELETING!!
	// 	$deleteQuery = $db->prepare('DELETE FROM tbl_file WHERE id =:id');

    //     $get_delete_set->execute(
	// 		array(
	// 			':id'=>$id
	// 		)
	// 	);
    //     $get_delete_set = $pdo->prepare($deleteQuery);
    // }	

    //header( "location: testimonial_all.php" );
    //this was literally working earlier????
    // no longer viewing the rows
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
            $select_stmt=$db->prepare("SELECT * FROM tbl_file");	//sql select query
            $select_stmt->execute();
            while($row=$select_stmt->fetch(PDO::FETCH_ASSOC))
            {
		?>

        <p><?php echo $row['name']; ?></p>
        <img src="images/<?php echo $row['image']; ?>" width="100px" height="60px">
        <a href="testimonial_edit.php?update_id=<?php echo $row['id']; ?>" class="btn">Edit</a>
        <a href="?delete=<?php echo $row['id']; ?>" class="btn">Delete</a>

        <?php
        }
        ?>
    </div>
		

									
	</body>
</html>