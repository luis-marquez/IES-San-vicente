starter.controller('reservas_quitarCtrl', function($scope, $stateParams, $http, $ionicPopup, $rootScope) {

	$http.get($rootScope.ajaxURL+"lista_reservas.php").success(function(data){
		$scope.reservas=data;
	});
	


});