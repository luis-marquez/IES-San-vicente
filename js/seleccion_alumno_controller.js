starter.controller('SeleccionAlumnoCtrl', function($scope, $stateParams, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
    $scope.documento = $stateParams.documento;

	
	$http.get("http://luis.iessv.es/ver_alumnos.php?grupo="+$scope.grupo).success(function(data){
		$scope.alumnos=data;
	});
});
