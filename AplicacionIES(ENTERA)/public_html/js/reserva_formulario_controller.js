starter.controller('reserva_formularioCtrl', function($scope, $stateParams, $http) {
	$scope.fecha = $stateParams.fecha;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.aula = $stateParams.aula;
	$scope.aulacodigo = $stateParams.aulacodigo;
	$scope.curso = $stateParams.curso;
	$scope.cursocodigo = $stateParams.cursocodigo;
	$scope.grupo = $stateParams.grupo;
	$scope.grupocodigo = $stateParams.grupocodigo;
	$scope.asignatura = $stateParams.asignatura;
	$scope.asignaturacodigo = $stateParams.asignaturacodigo;
	
	$http.get("http://localhost/lista_asignaturas.php").success(function(data){
		$scope.asignaturas=data;
	});	
	
	$scope.insertar_reserva = function(aulacodigo,fecha,horad,horah,asignaturacodigo,grupocodigo) {
			$http.get("http://localhost/reservaraula.php?aulacodigo="+aulacodigo+"&fecha="+fecha+"&horad="+horad+"&horah="+horah+"&asignaturacodigo="+asignaturacodigo+"&grupocodigo="+grupocodigo).success(function(data){
				$scope.alumnos=data;
			});
	}; 
	
});

