

/* Lista alumnos */

function update_nia(value) {
    $('#nia').val(value);
}

function alumns_groups(grupo) {

	if (typeof grupo == 'undefined')
		var grupo = $("#subject").val();   		
	$.ajax({
      url: "alumns_groups.php?grupo="+grupo,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#alumn_list li").remove();
			$.each( data_decoded, function( i, l ){
				$("#alumn_list").append("<li id='"+ l[0]+"'><a href='#popupBasic' data-transition='pop' data-rel='popup' onclick='update_nia(\""+l[0]+"\")'>"+ l[1]+" "+ l[2]+"</a></li>");
				$("#alumn_list").listview("refresh");
			});
		},
      error:function(){
      }   
    }); 
}

/* grupo actual */

function grupo_actual() {

	var docente = $("#docente").val();
	$.ajax({
	  url: "grupo_actual.php?docente="+docente,
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#subject").append("<option value= '"+ l[5] +"' onclick='alumns_groups(); more_alumnos()' id='subject' selected>"+ l[8] +" "+ l[7] +" "+ l[5] + "</option>");
				$("#subject").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}


function vaciarcoment(control)
{
  control.value='';
}


function verificarEntradacoment(control)
{
  if (control.value=='')
    alert('Debe ingresar el comentario');
}


/* Lista grupos/asignaturas del profesor */

function more_alumnos() {

	var docente = $("#docente").val();
	$.ajax({
      url: "more_alumnos.php?docente="+docente,
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
			$("#subject option").remove();
			$.each( data_decoded, function( i, l ){
 			    if (i == 0) {
					alumns_groups(l[5]);
				}
				$("#subject").append("<option value= '"+ l[5] +"' onclick='alumns_groups();' id='subject'>"+ l[8] +" "+ l[7] +" "+ l[5] + "</option>");
				$('#subject').selectmenu('refresh');
			});
      },
      error:function(){
		
      }   
    }); 
}


/* Listas comentarios */

function list_coment() {


  	var contenido = $("#subject").val();	
	var nia = $("#nia").val();	
	$.ajax({
      url: "list_coment.php?contenido="+contenido+"&nia="+nia,
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
 			$("#list li").remove();
 			$.each( data_decoded, function( i, l ){
				$("#list").append("<li><a href='#confirm_coment' data-transition='pop' data-rel='popup'>"+ l[1]+" "+ l[2]+"</a></li>");
				$('#list').listview('refresh');
			});
      },
      error:function(){
		
      }   
    }); 
}


/* Añadir comentario */

function add_coment() {

	var coment = $("#coment").val();
	$('#coment').val('');
	var contenido = $("#subject").val();	
	var nia = $("#nia").val();	
	$.ajax({
		url: "add_coment.php?coment="+coment+"&contenido="+contenido+"&nia="+nia,
		type: "get",
		error:function(){	
		}   
    }); 

}

/* Nombre alumno en la lista de comentarios */

function nombre_list_coment() {

	var nia = $("#nia").val();	
	$.ajax({
      url: "nombre_coment.php?nia="+nia,
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
			$("#nombre_alumno div").remove();
			$.each( data_decoded, function( i, l ){
			$('.nombre_alumno:first-child h1').append("more text");
			$(".nombre_alumno h1:first").append("more text");
			});
      },
      error:function(){
		
      }   
    }); 
}




/* eliminar comentario */

function delete_coment() {

	var clave = $("#clave").val();

	$.ajax({
		url: "delete_coment.php?clave="+clave,
		type: "get",
		error:function(){	
		}   
    }); 

}