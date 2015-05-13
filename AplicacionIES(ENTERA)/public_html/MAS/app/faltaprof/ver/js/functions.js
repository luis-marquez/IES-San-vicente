

/* Causa de la falta del profesor */

function profesores() {

	
	$.ajax({
      url: "aula_reser_ocu.php",
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#profs option").remove();
			$.each( data_decoded, function( i, l ){
				$("#profs").append("<option value='"+l[1]+"'>"+l[2]+" "+l[3]+"</option>");
				$("#profs").selectmenu("refresh");
			});
		},
      error:function(){
      }   
    }); 
}

/* Listas faltas */

function viendo_f_prof() {

  	var docente = $("#profs").val();	
	var fecha = $("#fecha_f_prof").val();	
	$.ajax({
      url: "viendo_f_prof.php?docente="+docente+"&fecha="+fecha,
      type: "get",
      success: function(data){
			var data_decoded = jQuery.parseJSON(data);
			$("#list li").remove();
			$.each( data_decoded, function( i, l ){
				$("#list").append("<li class='ui-li-static ui-body-inherit ui-first-child ui-last-child'><a href='#confirm_coment' data-transition='pop' data-rel='popup'>"+ l[1]+" "+ l[2]+"</a></li>");
				$("#home").append("<input type='hidden' id='clave' value='"+ l[2]+"'/>");
				$('#list').listview('refresh');
			});
      },
      error:function(){
		
      }   
    }); 
}


/* Añadir falta profesor */

function add_faltaprof() {

	var dni = $("#docente").val();
	var fecha = $("#fecha").val();	
	var horad = $("#horaini").val();	
	var horah = $("#horafin").val();	
	var dejatrab = $("#deja_trab_faltas").val();
	var coments = $("#coment_prof_falt").val();	
	var comentsalum = $("#coment_alumnos_falt").val();	
	var motivo = $("#causa_faltaprof").val();	

	/* var rama = $("#subject").val();	 */

	$.ajax({
		url: "add_faltaprof.php?dni="+dni+"&fecha="+fecha+"&horad="+horad+"&horah="+horah+"&dejatrab="+dejatrab+"&coments="+coments+"&comentsalum="+comentsalum"&motivo="+motivo,
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