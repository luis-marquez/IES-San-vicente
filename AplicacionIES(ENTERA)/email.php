<?php

$correo= $_REQUEST {"correo"};
$mensaje= $_REQUEST {"mensaje"}
$asunto= $_REQUEST {"asunto"}


mail (luismarquezcarpintero@gmail.com, "Prueba instituto emails", $mensaje.$correo );

?>