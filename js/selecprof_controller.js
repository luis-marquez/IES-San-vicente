starter.controller('selecprofCtrl', function($scope, $stateParams, $http) {

    $scope.documento = $stateParams.documento;
	
	$http.get("http://luis.iessv.es/listadocentes.php").success(function(data){
		$scope.docentes=data;
	});
	   
});
