<?php

file_put_contents("students.html", "<!DOCTYPE html><html><DIV ALIGN=center><h1><i>".$_GET['name']." ".$_GET['lastname'].": <br/>".$_GET['Mean']."</i></h1><img src='".$_GET['image']."'></div> \n", FILE_APPEND);
file_put_contents("students.html", "</html>", FILE_APPEND);

?>
