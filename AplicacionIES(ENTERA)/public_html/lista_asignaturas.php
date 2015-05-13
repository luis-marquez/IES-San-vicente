<?php

include 'database.php';

$database=open_database();

$result=execute_query("select * from contenidos");

echo json_encode ($result);

close_database ($database);


?>