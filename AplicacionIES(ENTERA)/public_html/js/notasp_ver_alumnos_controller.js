starter.controller('notasp_ver_alumnos_controller', function($scope, $stateParams, $http) {
    $scope.grupo = $stateParams.grupo;
	
	$http.get("http://luis.iessv.es/ver_alumnos.php?grupo="+$scope.grupo).success(function(data){
		$scope.alumnos=data;
	});

});
