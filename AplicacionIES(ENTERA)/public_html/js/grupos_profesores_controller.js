starter.controller('GruposProfesoresCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
	
	$http.get("http://luis.iessv.es/grupo_profesores.php?documento="+"1234").success(function(data){
		$scope.grupos=data;
	});
	   
});
