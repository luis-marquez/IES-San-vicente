<?php

   include 'database.php';
   
	$dni = $_GET['dni'];
	$fecha = $_GET['fecha'];
	$horad = $_GET['horad'];
	$horah = $_GET['horah'];
	$dejatrab = $_GET['dejatrab'];
	$coments = $_GET['coments'];
	$comentsalum = $_GET['comentsalum'];
	$motivo = $_GET['motivo'];
	
   $database = open_database();
   
   execute_query("insert into faltasprof (dni,fecha,horad,horah,dejatrab,coments,comentsalum,motivo) values('$dni','$fecha','$horad','$horah','$dejatrab','$coments','$comentsalum','$motivo')");
  
   close_database($database);

?>
