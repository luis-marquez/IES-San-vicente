<?php

   include 'database.php';
  
  	$nia = $_GET['nia'];   

/* 	$codprof = $_GET['codprof'];   
 */
	$contenido = $_GET['contenido'];   
  
	$database = open_database();
   
	$result = execute_query("select * from coment WHERE nia like '$nia' AND contenido like '$contenido'");
   
   echo json_encode($result);
  
   close_database($database);

?>
