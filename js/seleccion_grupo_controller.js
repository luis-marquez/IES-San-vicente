starter.controller('SeleccionGrupoCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.opcion = $stateParams.opcion;
    $scope.nombre = $stateParams.nombre;
    $scope.documento = $stateParams.documento;
	
	$http.get($rootScope.ajaxURL+"grupo_profesores.php?documento="+$scope.documento).success(function(data){
		$scope.grupos=data;
	});
	   
});
