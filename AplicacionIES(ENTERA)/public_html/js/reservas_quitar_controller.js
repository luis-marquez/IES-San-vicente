starter.controller('reservas_quitarCtrl', function($scope, $stateParams, $http, $ionicPopup) {

	$http.get("http://localhost/lista_reservas.php").success(function(data){
		$scope.reservas=data;
	});
	


});