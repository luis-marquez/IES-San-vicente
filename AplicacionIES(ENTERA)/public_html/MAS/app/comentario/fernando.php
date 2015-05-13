<?php

   include 'database.php';
   
   $database = open_database();
   
   $data = execute_query('select * from  asisten where coment="'.$_GET['coment'].'"');

   echo json_encode($data);  
  
   close_database($database);
   

?>
