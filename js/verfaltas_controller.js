starter.controller('verfaltasCtrl', function($scope, $http, $rootScope) {
    $http.get($rootScope.ajaxURL+"verfaltas.php").success(function(data){
	$scope.faltas=data;
	})
});
