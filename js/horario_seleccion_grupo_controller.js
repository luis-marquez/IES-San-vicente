starter.controller('HorarioSeleccionGrupoCtrl', function($scope, $stateParams, $http, $rootScope) {

	$http.get($rootScope.ajaxURL+"grupo_profesores.php?documento="+$rootScope.dniDocente).success(function(data){
		$scope.grupos=data;
	});
	   
});
