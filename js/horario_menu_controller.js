starter.controller('HorarioMenuCtrl', function($scope, $rootScope, $stateParams, $http) {
    
    $scope.documento = $stateParams.documento;

    $http.get($rootScope.ajaxURL+"horario2.php?dni="+$rootScope.dniDocente).success(function(data){
        $scope.horario=data;
    });
	   
});