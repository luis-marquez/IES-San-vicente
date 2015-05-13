
/* Lista alumnos */

function asignatura_reser() {

	var docente = $("#docente").val();	
	$.ajax({
      url: "asignatura_reser.php?docente="+docente,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#contenido option").remove();
			$.each( data_decoded, function( i, l ){
				$("#contenido").append("<option value='"+ l[8]+"'>"+ l[8]+"</option>");
				$("#contenido").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}


function aula_reser() {

	
	$.ajax({
      url: "aula_reser.php",
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#aula option").remove();
			$.each( data_decoded, function( i, l ){
				$("#aula").append("<option value='"+ l[0]+"' id='"+ l[0]+"'><br>"+ l[1]+"</br>  Capacidad ("+ l[2]+")</option>");
				$("#aula").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}

function vaciar(control)
	{
	  control.value='';
	}
	
	
	
function verificarEntrada(control)
	{
	  if (control.value=='')
		alert('Compruebe que no se deja ningun campo vacio');
	}

	
	
	
	function verificarEntradagrupo(control)
	{
	  if (control.value=='Seleccione grupo')
		alert('Compruebe que no se deja ningun campo vacio');
	}

	
	
	
	function verificarEntradaaula(control)
	{
	  if (control.value=='Seleccione aula')
		alert('Compruebe que no se deja ningun campo vacio');
	}
	
	

	function verificarEntradarama(control)
	{
	  if (control.value=='ramaespecialidad')
		alert('Compruebe que no se deja ningun campo vacio');
	}
	
	
	
function aula_reser_ocu() {

	var dia = $("#fecha").val();	
	var horad = $("#horaini").val();	
	var horah = $("#horafin").val();	
	
	$.ajax({
      url: "aula_reser_ocu.php?dia="+dia+"&horad="+horad+"&horah="+horah,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#aula option").remove();
			$.each( data_decoded, function( i, l ){
				$("#aula").append("<option value='"+ l[0]+"' id='"+ l[0]+"'><br>"+ l[1]+"</br>  Capacidad ("+ l[2]+")</option>");
				$("#aula").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}

function grupo_reser() {

	var docente = $("#docente").val();	
	$.ajax({
      url: "grupo_reser.php?docente="+docente,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#grupo option").remove();
			$.each( data_decoded, function( i, l ){
				$("#grupo").append("<option value='"+ l[5]+"' id='"+ l[5]+"'>"+ l[5]+"</option>");
				$("#grupo").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}



/* Añadir reserva */

function add_reserva() {

	var aula = $("#aula").val();
	var contenido = $("#contenido").val();	
	var dni = $("#docente").val();	
	var grupo = $("#grupo").val();	
	var dia = $("#fecha").val();
	var horad = $("#horaini").val();	
	var horah = $("#horafin").val();
	$('#fecha').val('');
	$('#horaini').val('');
	$('#horafin').val('');
	$('#contenido').val('contenido');
	$('#grupo').val('Seleccione grupo');
	$('#aula').val('Seleccione aula');	
	$('#esperama').val('ramaespecialidad');	
	/* var rama = $("#subject").val();	 */

	$.ajax({
		url: "add_reser.php?aula="+aula+"&contenido="+contenido+"&dni="+dni+"&grupo="+grupo+"&dia="+dia+"&horad="+horad+"&horah="+horah,
		type: "get",
		error:function(){	
		}   
    }); 

}


function list_reser() {

	var docente = $("#docente").val();	
	$.ajax({
      url: "list_reser.php?docente="+docente,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#list li").remove();
			$.each( data_decoded, function( i, l ){
				$("#list").append("<li class='ui-li-static ui-body-inherit ui-first-child ui-last-child'><a href='#confirm_reser' data-transition='pop' data-rel='popup'> El dia "+ l[5]+" desde las "+ l[6]+" hasta las "+ l[7]+" Con el codigo del aula "+ l[2]+" con "+ l[2]+" en la asigntura de "+ l[3]+"</a></li>");
				$("#list").listview("refresh");
			});
		},
      error:function(){
      }   
    }); 
}


function delete_reserva() {

	var aula = $("#aula").val();
	var dni = $("#docente").val();	
	var dia = $("#fecha").val();
	var horad = $("#horaini").val();	
	var horah = $("#horafin").val();	
	/* var rama = $("#subject").val();	 */

	$.ajax({
		url: "delete_reser.php?aula="+aula+"&dni="+dni+"&dia="+dia+"&horad="+horad+"&horah="+horah,
		type: "get",
		error:function(){	
		}   
    }); 

}



/* Eliminar valores */

function restart() {

	$.ajax({
      url: "list_coment.php",
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
			$("#fecha input").remove();
			$("#horaini input").remove();
			$("#horafin input").remove();
			$("#contenido input").remove();
			$("#grupo option").remove();
			
			$.each( data_decoded, function( i, l ){
			});
      },
      error:function(){
		
      }   
    }); 
}