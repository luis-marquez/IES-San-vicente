starter.controller('ListaProfesoresCtrl', function($scope, $stateParams, $http, $ionicPopup, $rootScope) {
    $scope.opcion = $stateParams.opcion;
    $scope.grupo = "ASIR";
	
	$http.get($rootScope.ajaxURL+"lista_profesores.php").success(function(data){
		$scope.profesores=data;
	});
});
