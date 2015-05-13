function list_alumnos() {

	$.ajax({
      url: "list_alumnos.php",
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#alumn_list").append("<script type='text/javascript'> function enviarseleccionados + l[0]+ (){  var + l[0]+;  if (document.getElementById('ch'+l[0]+).checked) {	$('#alumn_list').append('funcionaaaa');	$('#alumn_list').listview('refresh');  }  alert('Conoce ' + cant + ' lenguajes');}</script> <input type='checkbox' name='checkbox-h-6a' id='"+ l[0]+"'><label for='checkbox-h-6a' id='nia'>"+ l[1]+" "+ 1[2]+"</label>");
				$("input[type='checkbox']:first").attr("checked",true).checkboxradio("refresh");

			});

		},

      error:function(){
      }   
    }); 
}


function alumns_groups() {

	$.ajax({
      url: "alumns_groups.php",
      type: "get",
		success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#alumn_list").append(" <input type='checkbox' name='checkbox-h-6a' id='"+ l[0]+"'><label for='checkbox-h-6a' id='nia'>"+ l[1]+" "+ 1[2]+"</label>");
				$("input[type='checkbox']:first").attr("checked",true).checkboxradio("refresh");

			});
		},
      error:function(){
      }   
    }); 
}

function more_alumnos() {

	$.ajax({
      url: "more_alumnos.php",
      type: "get",
      success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#popuplist").append("<li><button id='groups' onclick='add_alumnos ()'>"+ l[1] + "</button></li>");
				$("#popuplist").listview("refresh");
			});
      },
      error:function(){
		
      }   
    }); 
}

function add_alumnos() {

	$.ajax({
      url: "list_alumnos.php",
      type: "get",
      success: function(data){
	        var data_decoded = jQuery.parseJSON(data);
			$.each( data_decoded, function( i, l ){
				$("#alumn_list").append(" <input type='checkbox' name='checkbox-h-6a' id='"+ l[0]+"'><label for='checkbox-h-6a' id='nia'>"+ l[1]+" "+ 1[2]+"</label>");
				$("#alumn_list").listview("refresh");
			});
      },
      error:function(){
		
      }   
    }); 
}


function add_coment() {
	//$.ajax("save.php?name="+name+"&score="+score+"&subject="+subject+"&image="+image);
	

	var checkedValue = $('.messageCheckbox:checked').val();
	var coment = $("#coment").val();
	
	$.ajax({
		url: "add_coment.php?coment="+coment+"&checkedValue="+checkedValue,
		type: "get",
		success: function(data){
		},
		error:function(){	
		}   
    }); 
}