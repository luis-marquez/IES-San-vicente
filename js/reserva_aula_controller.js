starter.controller('reserva_aulaCtrl', function($scope, $stateParams, $http) {
	$scope.fecha = $stateParams.fecha;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.aula = $stateParams.aula;
	$scope.aulacodigo = $stateParams.aulacodigo;
	
	$http.get("http://localhost/aulas.php").success(function(data){
		 $scope.aulas=data;
	 });	 
});