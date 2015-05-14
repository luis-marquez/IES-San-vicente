starter.controller('TodosAlumnosCtrl', function($scope, $stateParams, $http) {

    $scope.opcion = $stateParams.opcion;
    $scope.profesor = $stateParams.documento;
	
	$http.get("http://luis.iessv.es/todos_alumnos.php?documento="+$scope.profesor).success(function(data){
		$scope.alumnos=data;
	});
});
