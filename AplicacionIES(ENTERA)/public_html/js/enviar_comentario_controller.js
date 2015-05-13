starter.controller('EnviarComentarioCtrl', function($scope, $stateParams, $http ) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
    $scope.asignatura = $stateParams.asignatura;
    $scope.documento = $stateParams.documento;



 	   	$scope.insertar_coment = function(nia,coment) {
			$http.get("http://luis.iessv.es/insertar_coment.php?nia="+nia+"&coment="+coment+"&contenido="+$scope.asignatura+"&documento="+$scope.documento).success(function(data){
				$scope.alumnos=data;
			});
		 }; 

	   
});
