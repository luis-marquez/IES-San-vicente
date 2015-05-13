<?php

include 'database.php';

$dni = $_GET['dni'];
$clave_prof = $_GET['clave_prof'];

$database=open_database();

$result=execute_query("select * from docentesclave where documento='$dni' and clave='$clave_prof'");

echo json_encode ($result)


?>