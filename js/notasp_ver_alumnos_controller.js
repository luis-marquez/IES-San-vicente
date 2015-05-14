starter.controller('notasp_ver_alumnos_controller', function($scope,$rootScope,$stateParams,$http) {

    $scope.grupo = $stateParams.grupo;
	$scope.grupocodigo = $stateParams.grupocodigo;
    
    $http.get($rootScope.ajaxURL+"ver_alumnos.php?grupo="+$scope.grupocodigo).success(function(data){
        $scope.alumnos=data;
    });

});
