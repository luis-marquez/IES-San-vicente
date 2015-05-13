<?php

include 'database.php';

$database=open_database();

$dni = "1234";

$url = "https://iessanvicente.com/imgs/prof/0";

$imagen = "".$url.$dni.".jpg";
      
$result=execute_query("select documento, nombre, apellido1, '$url' from docentes");

echo json_encode ($result)
	
	
?>