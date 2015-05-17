starter.controller('EdHorarioProfesoresCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.documento = $stateParams.documento;
    $scope.nombre = $stateParams.nombre;
    $scope.apellido1 = $stateParams.apellido1;

    $http.get($rootScope.ajaxURL+"horario2.php?dni="+$scope.documento).success(function(data){
        $scope.horario=data;
    });
	   
});
