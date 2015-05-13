starter.controller('reserva_cursoCtrl', function($scope, $stateParams, $http) {
	$scope.fecha = $stateParams.fecha;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.aula = $stateParams.aula;
	$scope.aulacodigo = $stateParams.aulacodigo;
	$scope.curso = $stateParams.curso;
	$scope.cursocodigo = $stateParams.cursocodigo;
	
	$http.get("http://localhost/ver_curso.php").success(function(data){
		 $scope.cursos=data;
	 });	 
});