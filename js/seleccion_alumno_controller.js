starter.controller('SeleccionAlumnoCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
    $scope.documento = $stateParams.documento;

	
	$http.get($rootScope.ajaxURL+"ver_alumnos.php?grupo="+$scope.grupo).success(function(data){
		$scope.alumnos=data;
	});
});
