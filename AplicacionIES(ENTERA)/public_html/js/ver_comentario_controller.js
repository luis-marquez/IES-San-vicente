starter.controller('VerComentarioCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
    $scope.documento = $stateParams.documento;

	$http.get("http://luis.iessv.es/ver_comentarios.php?nia="+$scope.nia).success(function(data){
		$scope.comentario_ver=data;
	});
	   
});