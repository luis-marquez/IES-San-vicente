starter.controller('reservas_listarCtrl', function($scope, $stateParams, $http, $rootScope) {
	$http.get($rootScope.ajaxURL+"lista_reservas.php").success(function(data){
		$scope.reservas=data;
	});	
});