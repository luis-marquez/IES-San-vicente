starter.controller('GruposProfesoresCtrl', function($scope, $stateParams, $rootScope, $http, $ionicPopup) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
	
	$http.get($rootScope.ajaxURL+"grupo_profesores.php?documento="+"1234").success(function(data){
		$scope.grupos=data;
	});
	   
});
