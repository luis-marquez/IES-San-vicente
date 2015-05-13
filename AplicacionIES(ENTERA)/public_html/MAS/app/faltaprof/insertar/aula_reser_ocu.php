<?php

	include 'database.php';
   
   	$dia = $_GET['dia'];

	$horad = $_GET['horad'];

	$horah = $_GET['horah'];

	$database = open_database();

	$result = execute_query("select * from reservaaulas WHERE dia like '$dia' AND horad like '$horad' AND horah like '$horah'");

	echo json_encode($result);

	close_database($database);
	
?>
