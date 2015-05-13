starter.controller('LoginCtrl', function($scope,$rootScope,$http) {

	$scope.logearse = function(dni,clave_prof) {
		$http.get("http://localhost/logearse.php?dni="+dni+"&clave_prof="+clave_prof).success(function(data){
			if (data!="false") {
				$rootScope.dniDocente = dni;
				$rootScope.claveDocente = clave_prof;
			}
		});
	 }; 
	 
	 /* mirar lo de dentro de function que no sirve para nada pero no puedo quitarlo*/
	 
	$scope.incorrecto = function(dni,clave_prof) {
		$http.get("http://localhost/logearse.php?dni="+dni+"&clave_prof="+clave_prof).success(function(data){
			$scope.validarse=data;
		alert("No ha introducido correctamente los datos");	
		});
	 }; 

	 
	 
});

