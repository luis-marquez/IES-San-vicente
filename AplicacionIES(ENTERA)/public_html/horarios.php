<?php
fadsfasdfasdfasdf
/*




me aburro prueba luis

LUNES
$datos[0][0]
$datos[0][1]
$datos[0][2]
$datos[0][3]
$datos[0][4]
$datos[0][5]
$datos[0][6]
$datos[0][7]

MARTES
$datos[1][0]
$datos[1][1]
$datos[1][2]
$datos[1][3]
$datos[1][4]
$datos[1][5]
$datos[1][6]
$datos[1][7]

echo json_encode($datos);

*/

include 'database.php';

$dni = "1234";

$database=open_database();

$lunes1=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=8 and upper(dia_semana)='L'");

$lunes2=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=9 and upper(dia_semana)='L'");

$lunes3=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=10 and upper(dia_semana)='L'");

$lunes4=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=11 and upper(dia_semana)='L'");

$lunes5=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=12 and upper(dia_semana)='L'");

$lunes6=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=13 and upper(dia_semana)='L'");

$lunes7=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=14 and upper(dia_semana)='L'");

$lunes8=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=15 and upper(dia_semana)='L'");

$lunes9=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=16 and upper(dia_semana)='L'");

$lunes10=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=17 and upper(dia_semana)='L'");

$lunes11=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=18 and upper(dia_semana)='L'");

$lunes12=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=19 and upper(dia_semana)='L'");

$lunes13=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=20 and upper(dia_semana)='L'");

$martes1=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=8 and upper(dia_semana)='M'");

$martes2=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=9 and upper(dia_semana)='M'");

$martes3=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=10 and upper(dia_semana)='M'");

$martes4=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=11 and upper(dia_semana)='M'");

$martes5=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=12 and upper(dia_semana)='M'");

$martes6=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=13 and upper(dia_semana)='M'");

$martes7=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=14 and upper(dia_semana)='M'");

$martes8=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=15 and upper(dia_semana)='M'");

$martes9=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=16 and upper(dia_semana)='M'");

$martes10=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=17 and upper(dia_semana)='M'");

$martes11=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=18 and upper(dia_semana)='M'");

$martes12=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=19 and upper(dia_semana)='M'");

$martes13=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=20 and upper(dia_semana)='M'");

$miercoles1=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=8 and upper(dia_semana)='X'");

$miercoles2=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=9 and upper(dia_semana)='X'");

$miercoles3=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=10 and upper(dia_semana)='X'");

$miercoles4=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=11 and upper(dia_semana)='X'");

$miercoles5=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=12 and upper(dia_semana)='X'");

$miercoles6=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=13 and upper(dia_semana)='X'");

$miercoles7=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=14 and upper(dia_semana)='X'");

$miercoles8=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=15 and upper(dia_semana)='X'");

$miercoles9=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=16 and upper(dia_semana)='X'");

$miercoles10=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=17 and upper(dia_semana)='X'");

$miercoles11=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=18 and upper(dia_semana)='X'");

$miercoles12=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=19 and upper(dia_semana)='X'");

$miercoles13=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=20 and upper(dia_semana)='X'");

$jueves1=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=8 and upper(dia_semana)='J'");

$jueves2=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=9 and upper(dia_semana)='J'");

$jueves3=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=10 and upper(dia_semana)='J'");

$jueves4=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=11 and upper(dia_semana)='J'");

$jueves5=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=12 and upper(dia_semana)='J'");

$jueves6=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=13 and upper(dia_semana)='J'");

$jueves7=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=14 and upper(dia_semana)='J'");

$jueves8=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=15 and upper(dia_semana)='J'");

$jueves9=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=16 and upper(dia_semana)='J'");

$jueves10=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=17 and upper(dia_semana)='J'");

$jueves11=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=18 and upper(dia_semana)='J'");

$jueves12=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=19 and upper(dia_semana)='J'");

$jueves13=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=20 and upper(dia_semana)='J'");

$viernes1=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=8 and upper(dia_semana)='V'");

$viernes2=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=9 and upper(dia_semana)='V'");

$viernes3=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=10 and upper(dia_semana)='V'");

$viernes4=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=11 and upper(dia_semana)='V'");

$viernes5=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=12 and upper(dia_semana)='V'");

$viernes6=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=13 and upper(dia_semana)='V'");

$viernes7=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=14 and upper(dia_semana)='V'");

$viernes8=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=15 and upper(dia_semana)='V'");

$viernes9=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=16 and upper(dia_semana)='V'");

$viernes10=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=17 and upper(dia_semana)='V'");

$viernes11=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=18 and upper(dia_semana)='V'");

$viernes12=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=19 and upper(dia_semana)='V'");

$viernes13=execute_query("select contenido from horarios_grupo where docente='$dni' and hora_desde=20 and upper(dia_semana)='V'");

?>

		<TABLE BORDER='1' width='100%'>
			<TR>
			   <TH width='8%'>Hora</TH>
			   <TH>Lunes</TH>
			   <TH>Martes</TH>
			   <TH>Miercoles</TH>
			   <TH>Jueves</TH>
			   <TH>Viernes</TH>
			</TR>
			<TR>
						
			   <TD>8:00</TD>
			   <TD><?php echo $lunes1[0]->contenido; ?></TD>
			   <TD><?php echo $martes1[0]->contenido; ?></TD>
			   <TD>$miercoles1</TD>
			   <TD>$jueves1</TD>
			   <TD>$viernes1</TD>
			</TR>
			<TR>
			   <TD>9:00</TD>
			   <TD>$lunes2</TD>
			   <TD>$martes2</TD>
			   <TD>$miercoles2</TD>
			   <TD>$jueves2</TD>
			   <TD>$viernes2</TD>
			</TR>
			<TR>
			   <TD>10:00</TD>
			   <TD>$lunes3</TD>
			   <TD>$martes3</TD>
			   <TD>$miercoles3</TD>
			   <TD>$jueves3</TD>
			   <TD>$viernes3</TD>
			</TR>
			<TR>
			   <TD>11:00</TD>
			   <TD>$lunes4</TD>
			   <TD>$martes4</TD>
			   <TD>$miercoles4</TD>
			   <TD>$jueves4</TD>
			   <TD>$viernes4</TD>
			</TR>
			<TR>
			   <TD>12:00</TD>
			   <TD>$lunes5</TD>
			   <TD>$martes5</TD>
			   <TD>$miercoles5</TD>
			   <TD>$jueves5</TD>
			   <TD>$viernes5</TD>
			</TR>
			<TR>
			   <TD>13:00</TD>
			   <TD>$lunes6</TD>
			   <TD>$martes6</TD>
			   <TD>$miercoles6</TD>
			   <TD>$jueves6</TD>
			   <TD>$viernes6</TD>
			</TR>
			<TR>
			   <TD>14:00</TD>
			   <TD>$lunes7</TD>
			   <TD>$martes7</TD>
			   <TD>$miercoles7</TD>
			   <TD>$jueves7</TD>
			   <TD>$viernes7</TD>
			</TR>
			<TR>
			   <TD>15:00</TD>
			   <TD>$lunes8</TD>
			   <TD>$martes8</TD>
			   <TD>$miercoles8</TD>
			   <TD>$jueves8</TD>
			   <TD>$viernes8</TD>
			</TR>
			<TR>
			   <TD>16:00</TD>
			   <TD>$lunes9</TD>
			   <TD>$martes9</TD>
			   <TD>$miercoles9</TD>
			   <TD>$jueves9</TD>
			   <TD>$viernes9</TD>
			</TR>		
			<TR>
			   <TD>17:00</TD>
			   <TD>$lunes10</TD>
			   <TD>$martes10</TD>
			   <TD>$miercoles10</TD>
			   <TD>$jueves10</TD>
			   <TD>$viernes10</TD>
			   </TR>
			<TR>
			   <TD>18:00</TD>
			   <TD>$lunes11</TD>
			   <TD>$martes11</TD>
			   <TD>$miercoles11</TD>
			   <TD>$jueves11</TD>
			   <TD>$viernes11</TD>
			</TR>
			<TR>
			   <TD>19:00</TD>
			   <TD>$lunes12</TD>
			   <TD>$martes12</TD>
			   <TD>$miercoles12</TD>
			   <TD>$jueves12</TD>
			   <TD>$viernes12</TD>
			</TR>
			<TR>
			   <TD>20:00</TD>
			   <TD>$lunes13</TD>
			   <TD>$martes13</TD>
			   <TD>$miercoles13</TD>
			   <TD>$jueves13</TD>
			   <TD>$viernes13</TD>
			</TR>	
		</TABLE>
 
