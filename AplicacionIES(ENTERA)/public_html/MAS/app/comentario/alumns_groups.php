<?php

	include 'database.php';
   
	$grupo = $_GET['grupo'];   
	
	$database = open_database();

	$result = execute_query("select * from alumnos WHERE grupo like '$grupo'");

	echo json_encode($result);

	close_database($database);
	
	
/*    include 'database.php';
   
   $database = open_database();
   
   $result = execute_query("select * from alumnos");
   
   echo json_encode($result);
  
   close_database($database); */
?>
