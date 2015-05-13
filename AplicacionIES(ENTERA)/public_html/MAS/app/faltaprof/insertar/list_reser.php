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

	$result = execute_query("select * from reservaaulas WHERE dni like '$docente' AND dia > '$fecha' AND horah > '$hora'");

	echo json_encode($result);

	close_database($database);
	
?>
