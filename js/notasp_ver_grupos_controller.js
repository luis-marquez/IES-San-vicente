starter.controller('notasp_ver_grupos_controller', function($scope,$rootScope,$http) {

    $http.get($rootScope.ajaxURL+"ver_grupos.php").success(function(data){
        $scope.grupos=data;
    });

});
