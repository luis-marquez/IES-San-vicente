starter.controller('EdHorarioGruposCtrl', function($scope, $rootScope, $stateParams, $http) {
	
	$http.get($rootScope.ajaxURL+"ed_listado_grupos.php?documento="+$rootScope.dniDocente).success(function(data){
		$scope.grupos=data;
	});
	   
});
