starter.controller('verfaltasCtrl', function($scope, $http) {
    $http.get("http://luis.iessv.es/verfaltas.php").success(function(data){
	$scope.faltas=data;
	})
});
