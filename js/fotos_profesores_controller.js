starter.controller('FotosProfesoresCtrl', function($scope, $stateParams, $rootScope, $http, $ionicPopup) {
    $scope.grupo = $stateParams.grupo;

	
	$http.get($rootScope.ajaxURL+"fotos_profesores.php?grupo="+$scope.grupo).success(function(data){
		$scope.profesores=data;
	});
	   
});
