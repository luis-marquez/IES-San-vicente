starter.controller('reservas_asignaturasCtrl', function($scope, $stateParams, $http, $rootScope) {
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
	
	$http.get($rootScope.ajaxURL+"lista_asignaturas.php").success(function(data){
		$scope.asignaturas=data;
	});	
});