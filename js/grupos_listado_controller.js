starter.controller('GruposListadoCtrl', function($scope, $stateParams, $rootScope, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
	
	$http.get($rootScope.ajaxURL+"ED_listado_grupos.php").success(function(data){
		$scope.grupos_ed=data;
	});
});
