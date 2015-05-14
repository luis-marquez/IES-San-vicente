starter.controller('notasp_insertar_controller', function($scope, $stateParams, $http, $ionicPopup) {
    
    $scope.grupo = $stateParams.grupo;
	$scope.grupocodigo = $stateParams.grupocodigo;
    $scope.nombre = $stateParams.nombre;		
    $scope.nia = $stateParams.nia;
	
	$scope.poner_notas = function(nia,coment,codnota,fecha,tipo) {	
		$http.get("http://luis.iessv.es//anadir_notasp.php?nia="+nia+"&codnota="+codnota+"&fecha="+fecha+"&coment="+coment+"&tipo="+tipo).success(function(data){
			$scope.alumnos=data;
				$scope.showAlert();
		});
	};
	
	$scope.listar_notas = function(nia) {	
		$http.get("http://luis.iessv.es//listar_notasp.php?nia="+nia).success(function(data){
			$scope.alumnos=data;
				$scope.showAlert2(data);
		});
	};
	
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Correcto',
			template: 'La nota se ha guardado en la base de datos'
		});
		alertPopup.then(function(res) {
			console.log('NOTA INTRODUCIDA');
		});
	};

	$scope.showAlert2 = function(data) {
		var text='';
		for (i = 0; i < data.length; i++) {
			text +="El tipo de examen es:" + data[i].tipo + " El comentario es:"+data[i].coment +" La nota es:" + data[i].codnota + "<br>";
}
		var alertPopup = $ionicPopup.alert({
			title: 'Correcto',
			template: text
		});
		alertPopup.then(function(res) {
			console.log('NOTA INTRODUCIDA');
		});
	};	 
		
});
