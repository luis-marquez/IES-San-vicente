starter.controller('ListadoProfesoresHorarioCtrl', function($scope, $rootScope, $stateParams, $http) {
	
	$http.get($rootScope.ajaxURL+"ed_profesores.php").success(function(data){
		$scope.profesores=data;
	});
	   
});
