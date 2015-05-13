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
		$dni = $_REQUEST["dni"];
		$fecha = $_REQUEST["fecha"];
		$horad = $_REQUEST["horad"];
		$horah = $_REQUEST["horah"];
		$dejatrab = $_REQUEST["dejatrab"];
		$comentsalum = $_REQUEST["comentsalum"];
		$coments = $_REQUEST["coments"];
		$motivo = $_REQUEST["motivo"];
		
                
                print_r($_REQUEST);
		
		$database = open_database();
		$result =execute_query ("INSERT INTO faltasprof (dni,fecha,horad,horah,dejatrab,coments,comentsalum,motivo) VALUES ('$dni','$fecha','$horad','$horah','$dejatrab','$coments','$comentsalum','$motivo')");
		echo json_encode ("OK");
		close_database ($database);
?>		