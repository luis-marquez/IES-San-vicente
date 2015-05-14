starter.controller('reserva_grupoCtrl', function($scope, $stateParams, $http) {
	$scope.fecha = $stateParams.fecha;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.aula = $stateParams.aula;
	$scope.aulacodigo = $stateParams.aulacodigo;
	$scope.curso = $stateParams.curso;
	$scope.cursocodigo = $stateParams.cursocodigo;
	$scope.grupo = $stateParams.grupo;
	$scope.grupocodigo = $stateParams.grupocodigo;
	
	

	$http.get("http://localhost/ver_grupos.php").success(function(data){
		$scope.grupos=data;
	});

});
