starter.controller('ComentarioGrupoCtrl', function($scope, $rootScope, $stateParams, $http, $ionicPopup) {
    $scope.nombre = $stateParams.nombre;
    $scope.grupo = $stateParams.grupo;

	$http.get($rootScope.ajaxURL+"comentarios_por_grupo.php?grupo="+$scope.grupo).success(function(data){
		$scope.comentario_grupo=data;
	});
	   
});