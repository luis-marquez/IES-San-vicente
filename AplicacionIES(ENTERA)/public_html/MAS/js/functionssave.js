function list_alumnos() {

	$.ajax({
      url: "list_alumnos.php",
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
	
	var nia = $("#nia").val();	
	var coment = $("#coment").val();
	
	$.ajax({
		url: "add_coment.php?coment="+coment+"&nia="+nia,
		type: "get",
		success: function(data){
		},
		error:function(){	
		}   
    }); 
}