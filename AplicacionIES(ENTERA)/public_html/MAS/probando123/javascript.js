function add_asir_student() {
    var passwd1 = $("#passwd1").val();
    var passwd2 = $("#passwd2").val();
    var mail = $("#mail").val();

    $("#asir_list").append("<li>pasword: " + passwd1 + "paswordrepite: " + passwd2 + "mail: " + mail +"</li>");
		$.ajax( "pass.php?passwd1="+passwd1+"&passwd2="+passwd2+"&mail="+mail);
}