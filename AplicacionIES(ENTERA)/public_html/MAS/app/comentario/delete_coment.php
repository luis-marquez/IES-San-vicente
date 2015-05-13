<?php

   include 'database.php';
   
   $clave = $_GET['clave'];
   
   $database = open_database();
   
   execute_query("DELETE * from coment WHERE clave like '$clave'");
  
   close_database($database);

?>
