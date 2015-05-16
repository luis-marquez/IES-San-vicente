<?php


include 'database.php';

$cod_grupo = $_GET['cod_grupo'];

$database=open_database();

/* LUNES */

$horario[0][0]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=8 and upper(dia_semana)='L'");

$horario[0][1]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=9 and upper(dia_semana)='L'");

$horario[0][2]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=10 and upper(dia_semana)='L'");

$horario[0][3]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=11 and upper(dia_semana)='L'");

$horario[0][4]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=12 and upper(dia_semana)='L'");

$horario[0][5]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=13 and upper(dia_semana)='L'");

$horario[0][6]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=14 and upper(dia_semana)='L'");

$horario[0][7]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=15 and upper(dia_semana)='L'");

$horario[0][8]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=16 and upper(dia_semana)='L'");

$horario[0][9]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=17 and upper(dia_semana)='L'");

$horario[0][10]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=18 and upper(dia_semana)='L'");

$horario[0][11]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=19 and upper(dia_semana)='L'");

$horario[0][12]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=20 and upper(dia_semana)='L'");

/* MARTES */

$horario[1][0]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=8 and upper(dia_semana)='M'");

$horario[1][1]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=9 and upper(dia_semana)='M'");

$horario[1][2]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=10 and upper(dia_semana)='M'");

$horario[1][3]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=11 and upper(dia_semana)='M'");

$horario[1][4]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=12 and upper(dia_semana)='M'");

$horario[1][5]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=13 and upper(dia_semana)='M'");

$horario[1][6]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=14 and upper(dia_semana)='M'");

$horario[1][7]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=15 and upper(dia_semana)='M'");

$horario[1][8]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=16 and upper(dia_semana)='M'");

$horario[1][9]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=17 and upper(dia_semana)='M'");

$horario[1][10]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=18 and upper(dia_semana)='M'");

$horario[1][11]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=19 and upper(dia_semana)='M'");

$horario[1][12]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=20 and upper(dia_semana)='M'");

/* MIERCOLES */

$horario[2][0]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=8 and upper(dia_semana)='X'");

$horario[2][1]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=9 and upper(dia_semana)='X'");

$horario[2][2]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=10 and upper(dia_semana)='X'");

$horario[2][3]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=11 and upper(dia_semana)='X'");

$horario[2][4]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=12 and upper(dia_semana)='X'");

$horario[2][5]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=13 and upper(dia_semana)='X'");

$horario[2][6]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=14 and upper(dia_semana)='X'");

$horario[2][7]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=15 and upper(dia_semana)='X'");

$horario[2][8]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=16 and upper(dia_semana)='X'");

$horario[2][9]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=17 and upper(dia_semana)='X'");

$horario[2][10]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=18 and upper(dia_semana)='X'");

$horario[2][11]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=19 and upper(dia_semana)='X'");

$horario[2][12]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=20 and upper(dia_semana)='X'");

/* JUEVES */

$horario[3][0]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=8 and upper(dia_semana)='J'");

$horario[3][1]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=9 and upper(dia_semana)='J'");

$horario[3][2]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=10 and upper(dia_semana)='J'");

$horario[3][3]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=11 and upper(dia_semana)='J'");

$horario[3][4]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=12 and upper(dia_semana)='J'");

$horario[3][5]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=13 and upper(dia_semana)='J'");

$horario[3][6]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=14 and upper(dia_semana)='J'");

$horario[3][7]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=15 and upper(dia_semana)='J'");

$horario[3][8]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=16 and upper(dia_semana)='J'");

$horario[3][9]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=17 and upper(dia_semana)='J'");

$horario[3][10]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=18 and upper(dia_semana)='J'");

$horario[3][11]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=19 and upper(dia_semana)='J'");

$horario[3][12]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=20 and upper(dia_semana)='J'");

/* VIERNES */

$horario[4][0]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=8 and upper(dia_semana)='V'");

$horario[4][1]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=9 and upper(dia_semana)='V'");

$horario[4][2]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=10 and upper(dia_semana)='V'");

$horario[4][3]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=11 and upper(dia_semana)='V'");

$horario[4][4]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=12 and upper(dia_semana)='V'");

$horario[4][5]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=13 and upper(dia_semana)='V'");

$horario[4][6]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=14 and upper(dia_semana)='V'");

$horario[4][7]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=15 and upper(dia_semana)='V'");

$horario[4][8]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=16 and upper(dia_semana)='V'");

$horario[4][9]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=17 and upper(dia_semana)='V'");

$horario[4][10]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=18 and upper(dia_semana)='V'");

$horario[4][11]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=19 and upper(dia_semana)='V'");

$horario[4][12]=execute_query("select contenido from horarios_grupo where horarios_grupo.grupo='$cod_grupo' and hora_desde=20 and upper(dia_semana)='V'");

echo json_encode($horario);
?> 
