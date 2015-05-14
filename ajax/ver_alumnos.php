<?php

    include 'database.php';

    $grupo = $_GET['grupo'];

    $database=open_database();

    $result=execute_query("select * from alumnos where grupo='$grupo'");

    echo json_encode($result);

?>