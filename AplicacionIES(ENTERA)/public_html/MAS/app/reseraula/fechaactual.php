<?php

NO SIRVE --> ETO ES CODIGO REDUNDANTE -->

// set the default timezone to use. Available since PHP 5.1
date_default_timezone_set('UTC');


	$f = new DateTime();
	
	$f->format('Y-m-d') . "\n";
	
	$fecha = $f->format('Y-m-d') . "\n";
	
	echo $fecha
	
	$result = execute_query("select * from reservaaulas WHERE dni like '$docente' AND fecha < 'dia'");
	
	
	
/*  H:i:sP	
 */	
/* 
	echo date('l')[0];	

	echo date('h'); /* DATE_FORMAT */

/* 	$dia = date('l')[0];	

	$hora = date('h'); /* DATE_FORMAT */
/* 
	echo date("l");

	echo $hora = date('l');
  
	echo strtotime("now"), "\n";

    $timestamp = strtotime(str_replace('/', '-', '27/05/1990')); 
	
	echo $timestamp */

	

	
 ?>