starter.controller('reserva_cursoCtrl', function($scope, $stateParams, $http, $rootScope) {
	$scope.fecha = $stateParams.fecha;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.aula = $stateParams.aula;
	$scope.aulacodigo = $stateParams.aulacodigo;
	$scope.curso = $stateParams.curso;
	$scope.cursocodigo = $stateParams.cursocodigo;
	
	$http.get($rootScope.ajaxURL+"ver_curso.php").success(function(data){
		 $scope.cursos=data;
	 });	 
});