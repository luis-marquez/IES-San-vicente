starter.controller('HorarioTusGruposCtrl', function($scope, $rootScope, $stateParams, $http) {
    
    $scope.codgrupo = $stateParams.codgrupo;

    $http.get($rootScope.ajaxURL+"horario2.php?cod_grupo="+$scope.codgrupo).success(function(data){
        $scope.horario=data;
    });
	   
});