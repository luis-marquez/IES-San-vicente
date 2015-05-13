starter.controller('ComentarioGrupoCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.nombre = $stateParams.nombre;
    $scope.grupo = $stateParams.grupo;

	$http.get("http://luis.iessv.es/comentarios_por_grupo.php?grupo="+$scope.grupo).success(function(data){
		$scope.comentario_grupo=data;
	});
	   
});