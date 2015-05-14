<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {  
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");  
    header('Access-Control-Allow-Credentials: true');  
    header('Access-Control-Max-Age: 86400');   
}  
  
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {  
  
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))  
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  
  
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))  
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");  
}  


	include 'database.php';
	$nia = $_GET['nia'];
	//$nombre = $_GET['nombre'];
	$codnota = $_GET['codnota'];
	$fecha = $_GET['fecha'];
	$coment = $_GET['coment'];
	$tipo = $_GET['tipo'];
	
	date_default_timezone_set('utc');
	

	$database=open_database();

	$result = execute_query("insert into notasp (nia,codnota,fecha,coment,tipo) values ('$nia','$codnota','$fecha','$coment','$tipo')");

	echo json_encode ($result);


?>