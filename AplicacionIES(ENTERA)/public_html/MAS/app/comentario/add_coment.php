<?php

   include 'database.php';
   
   $nia = $_GET['nia'];
   $coment = $_GET['coment'];
   $contenido = $_GET['contenido'];
   
   $database = open_database();
   
   execute_query("insert into coment (nia,coment,contenido) values('$nia','$coment','$contenido')");
  
   close_database($database);

?>
