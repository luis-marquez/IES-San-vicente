<?php

include 'database.php';

$documento = $_GET['documento'];

$database=open_database();

$result=execute_query("select * 
from horarios_grupo,grupos 
where horarios_grupo.docente='$documento' 
and grupos.codigo=horarios_grupo.grupo");

echo json_encode ($result)

?>