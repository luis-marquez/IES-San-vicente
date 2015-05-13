<?php

   include 'database.php';
   
	$aula = $_GET['aula'];
	$contenido = $_GET['contenido'];
	$dni = $_GET['dni'];
	$grupo = $_GET['grupo'];
	$dia = $_GET['dia'];
	$horad = $_GET['horad'];
	$horah = $_GET['horah'];

   $database = open_database();
   
   execute_query("insert into reservaaulas (codigoaula,codasig,dni,codgrup,dia,horad,horah) values('$aula','$contenido','$dni','$grupo','$dia','$horad','$horah')");
  
   close_database($database);

?>
