<?php

	date_default_timezone_set('UTC'); /* GMT */
	
	include 'database.php';
		
	$dia = date('l')[0];	

	$hora = date('h'); /* DATE_FORMAT */

	$docente = $_GET['docente'];   	
	
	$database = open_database();

	$result = execute_query("select * from horarios_grupo WHERE dia_semana like '$dia' AND hora_desde like '$hora' AND docente like '$docente'");

	echo json_encode($result);

	close_database($database);
	
	
/*    include 'database.php';
   
   $database = open_database();
   
   $result = execute_query("select * from alumnos");
   
   echo json_encode($result);
  
   close_database($database); */
?>
