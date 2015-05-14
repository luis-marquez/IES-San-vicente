starter.controller('TodosAlumnosCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.opcion = $stateParams.opcion;
    $scope.profesor = $stateParams.documento;
	
	$http.get($rootScope.ajaxURL+"todos_alumnos.php?documento="+$scope.profesor).success(function(data){
		$scope.alumnos=data;
	});
});
