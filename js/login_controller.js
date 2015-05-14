starter.controller('LoginCtrl', function($scope,$rootScope,$state,$http) {

    $scope.logearse = function(dni,clave_prof) {
        $http.get($rootScope.ajaxURL+"logearse.php?dni="+dni+"&clave="+clave_prof).success(function(data){
            if (data[0] && data[0].documento && data[0].documento==dni) {
                $rootScope.dniDocente = dni;
                $rootScope.claveDocente = clave_prof;
            }
            else {
                alert("No ha introducido correctamente los datos");
                $state.go("login");
            }
        }).error(function(data) {
            alert("No ha introducido correctamente los datos");
            $state.go("login");            
        });
    }; 	 
});

