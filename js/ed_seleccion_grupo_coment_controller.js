starter.controller('EDGrupoCtrl', function($scope, $rootScope, $stateParams, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.nombre = $stateParams.nombre;
    $scope.documento = $stateParams.documento;
	
	$http.get($rootScope.ajaxURL+"ed_grupos.php").success(function(data){
		$scope.grupos=data;
	});
	   
});
