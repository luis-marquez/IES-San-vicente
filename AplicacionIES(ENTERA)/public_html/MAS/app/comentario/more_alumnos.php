<?php

   include 'database.php';
   
   $docente = $_GET['docente'];   

   $database = open_database();
   
   $result = execute_query("select * from `horarios_grupo` WHERE docente like '$docente'");
   
   echo json_encode($result);
  
   close_database($database);

?>
