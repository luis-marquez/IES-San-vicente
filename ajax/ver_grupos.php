<?php

    include 'database.php';

    $database=open_database();

    $result=execute_query("select * from grupos");

    echo json_encode ($result);

?>