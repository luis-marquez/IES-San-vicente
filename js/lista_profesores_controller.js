starter.controller('ListaProfesoresCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.opcion = $stateParams.opcion;
    $scope.grupo = "ASIR";
	
	$http.get("http://luis.iessv.es/lista_profesores.php").success(function(data){
		$scope.profesores=data;
	});
});
