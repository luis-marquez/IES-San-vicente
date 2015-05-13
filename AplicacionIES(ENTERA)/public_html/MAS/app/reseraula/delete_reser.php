<?php

	include 'database.php';
   
	$dia = $_GET['dia'];
   
   	$horah = $_GET['horah'];

	$horad = $_GET['horad'];

	$aula = $_GET['aula'];
		
	$database = open_database();

	$result = execute_query("DELETE * from reservaaulas WHERE dia like '$dia' AND horad like '$horad' AND horah like 'horah' AND aula like 'aula' ");

	echo json_encode($result);

	close_database($database);
	
?>
