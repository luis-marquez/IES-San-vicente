starter.controller('reservas_listarCtrl', function($scope, $stateParams, $http) {
	$http.get("http://localhost/lista_reservas.php").success(function(data){
		$scope.reservas=data;
	});	
});