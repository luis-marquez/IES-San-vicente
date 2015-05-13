<?php

$correo = $_REQUEST {"correo"};
$mensaje = $_REQUEST {"mensaje"};
mail ( "luismarquezcarpintero@gmail.com","Prueba instituto emails", $mensaje. $correo );

?>