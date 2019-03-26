<?php

// function redirect_to($location) {
//     // echo 'inside redirect';exit;
//   if($location != NULL ) {
//     // var_dump($location);
//     header('Location: '.$location);
//     exit();
//   }
// }

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

      // you could run subresult queries here - just write another function and append.
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

      // you could run subresult queries here - just write another function and append.
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