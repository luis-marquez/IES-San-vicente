starter.controller('notasp_ver_grupos_controller', function($scope,$http) {

	$http.get("http://luis.iessv.es/ver_grupos.php").success(function(data){
		$scope.grupos=data;
	});

});
