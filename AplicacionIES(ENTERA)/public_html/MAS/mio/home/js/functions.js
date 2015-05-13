

/* Lista gente registrada */

function usuarios_amigos() {

	var grupo = $("#subject").val();	
	$.ajax({
      url: "alumns_groups.php?grupo="+grupo,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#gente_registrada li").remove();
			$.each( data_decoded, function( i, l ){
				$("#gente_registrada").append("<li><a href='#home'>Home</a></li>");
				$("#alumn_list").append("<input type='hidden' id='nia' value='"+ l[1]+"'/>");
				$("#alumn_list").listview("refresh");
			});
		},
      error:function(){
      }   
    }); 
}



function verificar_login($user,$password,&$result)

    {

        $sql = “SELECT * FROM usuarios WHERE usuario = ‘$user’ and ‘$password’ = ‘$password’”;

        $rec = mysql_query($sql);

        $count = 0;

        while($row = mysql_fetch_object($rec))

        {

            $count++;

            $result = $row;

        }

        if($count == 1)

        {

            return 1;

        }

        else

        {

            return 0;

        }

    }


/*Luego haremos una serie de condicionales que identificaran el momento en el boton de login es presionado y cuando este sea presionado llamaremos a la función verificar_login() pasandole los parámetros ingresados:*/


if(!isset($_SESSION['userid'])) //para saber si existe o no ya la variable de sesión que se va a crear cuando el usuario se logee

{

    if(isset($_POST['login'])) //Si la primera condición no pasa, haremos otra preguntando si el boton de login fue presionado

    {

        if(verificar_login($_POST['user'],$_POST['password'],$result) == 1) //Si el boton fue presionado llamamos a la función verificar_login() dentro de otra condición preguntando si resulta verdadero y le pasamos los valores ingresados como parámetros.

        {

            /*Si el login fue correcto, registramos la variable de sesión y al mismo tiempo refrescamos la pagina index.php.*/

            $_SESSION['userid'] = $result->idusuario;

            header("location:index.php");

        }

        else

        {

            echo '<div class="error">Su usuario es incorrecto, intente nuevamente.</div>'; //Si la función verificar_login() no pasa, que se muestre un mensaje de error.

        }

    }




/* grupo actual */

function grupo_actual() {

	var grupo = $("#subject").val();	
	$.ajax({
	  url: "grupo_actual.php?grupo_actual="+grupo_actual,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#subject").append("<option value= '"+ l[5] +"' onload='alumns_groups()' id='subject' selected>"+ l[8] +" "+ l[7] +" "+ l[5] + "</option>");
				$("#subject").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}


/* Lista grupos/asignaturas del profesor */

function more_alumnos() {

	$.ajax({
      url: "more_alumnos.php",
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
			$("#subject option").remove();
			$.each( data_decoded, function( i, l ){
				$("#subject").append("<option value= '"+ l[5] +"' onclick='alumns_groups()' id='subject'>"+ l[8] +" "+ l[7] +" "+ l[5] + "</option>");
				$('#subject').selectmenu('refresh');
			});
      },
      error:function(){
		
      }   
    }); 
}


/* Añadir comentario */

function add_coment() {

	var coment = $("#coment").val();
	var contenido = $("#subject").val();	
	var nia = $("#nia").val();	
	$.ajax({
		url: "add_coment.php?coment="+coment+"&contenido="+contenido+"&nia="+nia,
		type: "get",
		error:function(){	
		}   
    }); 

}