starter.controller('EliminarComentarioCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    $scope.nombre = $stateParams.nombre;
    $scope.nia = $stateParams.nia;
    $scope.documento = $stateParams.documento;
	
	$scope.PopUp = function(clave) {
	 var confirmPopup = $ionicPopup.confirm({
	   title: '¿Estas seguro?',
	   template: 'Si presiona OK el comentario seleccionado se borrará permanentemenete'
	 });
	 confirmPopup.then(function(res) {
	   if(res) {
			$http.get("http://luis.iessv.es/eliminar_coment.php?clave="+clave).success(function(data){
				$http.get("http://luis.iessv.es/ver_comentarios.php?nia="+$scope.nia).success(function(data){
					$scope.comentario_eliminar=data;
				});				
			});
		} else {
			console.log('You are not sure');
		}
	 });
	};

	$scope.eliminar_coment = function(nia,coment,nia) {
	 }; 

/* $scope.nia = "123";	 
 */
	$http.get("http://luis.iessv.es/ver_comentarios.php?nia="+$scope.nia).success(function(data){
		$scope.comentario_eliminar=data;
	});
	   
});
