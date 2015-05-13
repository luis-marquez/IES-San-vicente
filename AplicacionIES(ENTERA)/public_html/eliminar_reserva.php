<?php

include 'database.php';

$codigoaula = $_GET['codigoaula'];

$database=open_database();

$result=execute_query("delete from reservaaulas where codigoaula='$codigoaula' and dia='$dia' and horad='$horad'" );

echo json_encode ($result);

close_database ($database);


?>