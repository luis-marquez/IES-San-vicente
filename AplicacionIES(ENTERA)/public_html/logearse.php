<?php
    include 'database.php';

    $dni = $_GET['dni'];
    $clave = $_GET['clave'];

    $database=open_database();

    $result = execute_query("select * from docentesclave where documento='$dni' and clave='$clave' limit 1");
    
    echo json_encode($result);

    close_database($database);
?> 
