starter.controller('AlumnosGruposCtrl', function($scope, $rootScope, $stateParams, $http, $ionicPopup) {
    $scope.opcion = $stateParams.opcion;
    $scope.grupo = $stateParams.grupo;
	
/* 	ARREGLADO -----hay que modificar y sustituir asir por esto cuando la BBDD esta bien "$stateParams.grupo"   */	
	
/* 	ARREGLADO -----pasas cod en el state params en lugar el codigo del curso */

	$scope.popupfoto = function(nia) {	
		$http.get($rootScope.ajaxURL+"fotografias_alumnos.php?num="+nia).success(function(data){
			$scope.imagenes=data;
				$scope.showAlert2(data);
		});
	};
	
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Imagen',
			template: 'La nota se ha guardado en la base de datos'
		});
		alertPopup.then(function(res) {
			console.log('NOTA INTRODUCIDA');
		});
	};

	$scope.showAlert2 = function(data) {
		var text='';
{
			text +="<center><img src='" + data + "'></center>";
}
		var alertPopup = $ionicPopup.alert({
			title: 'Imagen',
			template: text
		});
		alertPopup.then(function(res) {
			console.log('NOTA INTRODUCIDA');
		});
	};	 
		

	$http.get("http://luis.iessv.es/ed_alumnos_grupo.php?grupo="+$scope.grupo).success(function(data){
		$scope.alumnos_ed=data;
	});
});
