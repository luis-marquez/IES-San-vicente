<?php

$num = $_GET['num'];

$nia = $num;

   function NombreImagenNIA($num)
   {
         if (!ctype_digit($num))
            return $num;
        $niaNumerico = 0+$num;
        $letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        $letra1=$letrasDNI{$niaNumerico%23};
        $letra2=$letrasDNI{($niaNumerico-1)%17};
        $letra3=$letrasDNI{($niaNumerico-2)%21};
        $letra4=$letrasDNI{($niaNumerico*2)%20};
        $letra5=$letrasDNI{($niaNumerico-5)%23};
        return "".$num.$letra1.$letra2.$letra3.$letra4.$letra5
            .".jpg";
    }  

    $imagen = "https://iessanvicente.com/imgs/alu/".NombreImagenNIA($nia);

echo ($imagen); 

?>