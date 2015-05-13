<?php

   include 'database.php';
   
   $database = open_database();
   
   $data = execute_query('select * from  asisten where nia="'.$_GET['nia'].'"');

   echo json_encode($data);  
  
   close_database($database);
   

?>
