starter.controller('GruposListadoCtrl', function($scope, $stateParams, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
	
	$http.get("http://luis.iessv.es/ED_listado_grupos.php").success(function(data){
		$scope.grupos_ed=data;
	});
});
