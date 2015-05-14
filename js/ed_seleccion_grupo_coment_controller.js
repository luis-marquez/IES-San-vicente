starter.controller('EDGrupoCtrl', function($scope, $stateParams, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.nombre = $stateParams.nombre;
    $scope.documento = $stateParams.documento;
	
	$http.get("http://luis.iessv.es/ed_grupos.php").success(function(data){
		$scope.grupos=data;
	});
	   
});
