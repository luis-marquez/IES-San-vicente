starter.controller('SelecAsignaturaCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
    $scope.documento = $stateParams.documento;
    $scope.grupo = "123";
    $scope.documento = "1234";

	
	$http.get($rootScope.ajaxURL+"asignaturas_por_profe_y_grupo.php?grupo=123&documento=1234").success(function(data){
		$scope.asignaturas=data;
	});
});
