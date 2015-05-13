<?php

   include 'database.php';
   
   $aulacodigo = $_GET['aulacodigo'];
   $fecha = $_GET['fecha'];
   $horad = $_GET['horad'];
   $horah = $_GET['horah'];
   $grupocodigo = $_GET['grupocodigo'];
   $asignaturacodigo = $_GET['asignaturacodigo'];
   
   $database = open_database();
   
   execute_query("insert into reservaaulas (dni,codigoaula,codgrup,codasig,dia,horad,horah) values('$nia','$aulacodigo','$grupocodigo','$asignaturacodigo','$fecha','$horad','$horah')");
  
   close_database($database);

?>
