<?php

include 'database.php';

$database=open_database();

$result=execute_query("select docentes.nombre, docentes.apellido1, docentes.apellido2, reservaaulas_aula.descrip, reservaaulas.dia, reservaaulas.horad, reservaaulas.horah from reservaaulas, reservaaulas_aula, docentes where reservaaulas.codigoaula=reservaaulas_aula.codigo and reservaaulas.dni=docentes.documento" );

echo json_encode ($result);

close_database ($database);


?>