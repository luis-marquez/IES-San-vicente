function add_asir_student() {
	var name = $("#name").val();
	var lastname = $("#lastname").val();
	var score = $("#score").val();
	var score1 = $("#score1").val();   
	var score2 = $("#score2").val();   
	var image = $("#image").val();
	var optional = $("#optional").val();
	var suma = parseInt(score)+parseInt(score1)+parseInt(score2)
	var Mean = parseInt(suma)/3
  if (Mean>4.9)
  {
    $("#asir_list").append("<li><font color=Green>-Name: " + name + "<br/> -Last name: " + lastname + "<br/> -You're approved (Mean:" + Mean + ")." + "<br/> -Optional: " + optional + "<br/> -URL image: " + image +"</font></li>");
    $("#asir_list").listview("refresh");
		$.ajax( "save.php?name="+name+"&lastname="+lastname+"&Mean="+Mean+"&image="+image);
  }
  else
  {
    $("#asir_list").append("<li><font color=red>-Name: " + name + "<br/> -Last name: " + lastname + "<br/> -You're suspended (Mean:" + Mean + ")." + "<br/> -Optional: " + optional + "<br/> -URL image: " + image +"</font></li>");
    $("#asir_list").listview("refresh");
		$.ajax( "save.php?name="+name+"&lastname="+lastname+"&Mean="+Mean+"&image="+image);
   }
}
