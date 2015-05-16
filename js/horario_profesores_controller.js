starter.controller('HorarioSeleccionGrupoCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.documento = $stateParams.documento;

	$http.get($rootScope.ajaxURL+"grupo_profesores.php?documento="+$scope.documento).success(function(data){
		$scope.horario=data;
	});
	   
});
