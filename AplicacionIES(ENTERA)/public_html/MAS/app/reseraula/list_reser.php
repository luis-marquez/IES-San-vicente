<?php

	include 'database.php';
   
	$docente = $_GET['docente'];
   
	$database = open_database();
	
	$f = new DateTime();
	
	$f->format('Y-m-d') . "\n";
	
	$fecha = $f->format('Y-m-d') . "\n";

	$hora = date('h'); /* DATE_FORMAT */
		
	$result = execute_query("select * from reservaaulas WHERE dni like '$docente' AND dia > '$fecha' AND horah > '$hora'");

	echo json_encode($result);

	close_database($database);
	
?>
