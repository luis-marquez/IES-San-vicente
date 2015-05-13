

/* Causa de la falta del profesor */

function causa_faltaprof() {

	
	$.ajax({
      url: "aula_reser.php",
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$("#causa_faltaprof option").remove();
			$.each( data_decoded, function( i, l ){
				$("#causa_faltaprof").append("<option value='enfermedad_comun' id='enfermedad_comun'><br>Enfermedad común(Sin baja medica)</br></option><option value='actividades_extraescolares' id='actividades_extraescolares'><br>Actividades extraescolares</br></option><option value='asistencia_cursos' id='asistencia_cursos'><br>Asistencia a cursos de perfeccionamiento profesional</br></option><option value='asistencia_conferencias' id='asistencia_conferencias'><br>Asistencia conferencias, seminarios, congresos y jornadas</br></option><option value='asistencia_medica' id='asistencia_medica'><br>Asistencia médico, educativo y asistencial</br></option><option value='asistencia_pruebas' id='asistencia_pruebas'><br>Asistencia pruebas selectivas y exámenes</br></option><option value='baja_medica' id='baja_medica'><br>Baja médica</br></option><option value='cele_matrimonio' id='cele_matrimonio'><br>Celebración de matrimonio o unión de hecho</br></option><option value='enfermedad_familiares' id='enfermedad_familiares'><br>Enfermedad de familiares</br></option><option value='enfermedad_grave_fallecimiento' id='enfermedad_grave_fallecimiento'><br>Enfermedad grave o fallecimiento de familiar</br></option><option value='representativas_formacion' id='representativas_formacion'><br>Funciones representativas y formación</br></option><option value='interrupcion_embarazo' id='interrupcion_embarazo'><br>Interrupción del embarazo</br></option><option value='matrimonio_union' id='matrimonio_union'><br>Matrimonio o unión de hecho</br></option><option value='nacimiento_adopcion' id='nacimiento_adopcion'><br>Nacimiento/adopción</br></option><option value='tecnicas_prenatales' id='tecnicas_prenatales'><br>Técnicas prenatales</br></option><option value='mudanza' id='mudanza'><br>Translado de domicilio natural</br></option><option value='deber_inexcusable' id='deber_inexcusable'><br>Deber inexcusable</br></option>");
				$("#causa_faltaprof").selectmenu("refresh");
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