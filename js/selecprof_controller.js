starter.controller('selecprofCtrl', function($scope, $stateParams, $http, $rootScope) {

    $scope.documento = $stateParams.documento;
	
	$http.get($rootScope.ajaxURL+"listadocentes.php").success(function(data){
		$scope.docentes=data;
	});
	   
});
