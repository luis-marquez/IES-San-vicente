starter.controller('resumenCtrl', function($scope, $stateParams, $rootScope, $http){
	$scope.documento = $stateParams.documento;
	$scope.horad = $stateParams.horad;
	$scope.horah = $stateParams.horah;
	$scope.trab = $stateParams.trab;
	$scope.fecha = $stateParams.fecha;
	$scope.motivo = $stateParams.motivo;
			
	$scope.insertar_faltas = function(documento,fecha,horad,horah,motivo,trab,comentalu,comentprof) {
		$http.get($rootScope.ajaxURL+"faltas.php?dni="+documento+"&fecha="+fecha+"&horad="+horad+
		"&horah="+horah+"&dejatrab="+trab+"&motivo="+motivo+"&coments="+coments+"&comentsalum="+comentalu).success(function(data){
		$scope.faltasprof=data;
	});

		
	};
	});
	


