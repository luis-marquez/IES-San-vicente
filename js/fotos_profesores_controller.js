starter.controller('FotosProfesoresCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.grupo = $stateParams.grupo;

	
	$http.get("http://luis.iessv.es/fotos_profesores.php?grupo="+$scope.grupo).success(function(data){
		$scope.profesores=data;
	});
	   
});
