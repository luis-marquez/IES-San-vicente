starter.controller('reservas_asignaturasCtrl', function($scope, $stateParams, $http) {
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
});