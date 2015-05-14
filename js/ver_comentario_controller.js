starter.controller('VerComentarioCtrl', function($scope, $stateParams, $http, $ionicPopup, $rootScope) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
    $scope.documento = $stateParams.documento;

	$http.get($rootScope.ajaxURL+"ver_comentarios.php?nia="+$scope.nia).success(function(data){
		$scope.comentario_ver=data;
	});
	   
});