function add_asir_student() {
	//$.ajax("save.php?name="+name+"&score="+score+"&subject="+subject+"&image="+image);
	
	var nia = $("#textinput").val();
	
	$.ajax({
      url: "fernando.php?nia="+nia,
      type: "get",
      success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#asir_list").append("<li>Fecha: " + l[0] + " - " + " Desde la hora: " + l[1] + " - " + " Hasta la hora: " + l[2] + " - " + " Justitifcado: " + l[3] + "</li>");
				$("#asir_list").listview("refresh");
			});
      },
      error:function(){
		
      }   
    }); 
}

