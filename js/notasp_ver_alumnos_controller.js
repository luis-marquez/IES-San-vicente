starter.controller('notasp_ver_alumnos_controller', function($scope, $rootScope, $stateParams, $http) {

    $scope.grupo = $stateParams.grupo;
	
    $http.get($rootScope.ajaxURL+"ver_alumnos.php?grupo="+$scope.grupo).success(function(data){
        $scope.alumnos=data;
    });

});
