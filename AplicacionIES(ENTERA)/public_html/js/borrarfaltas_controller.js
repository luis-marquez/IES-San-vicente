starter.controller('borrarCtrl', function($scope,$http,$ionicPopup) {
    
	$http.get("http://luis.iessv.es/verfaltas.php").success(function(data){
	$scope.faltas=data;
	});
	 
	 
/* 	$scope.PopUp = function('dni') {
	 var confirmPopup = $ionicPopup.confirm({
	   title: '¿Estas seguro de que sea borrar la falta seleccionada?',
	   template: 'Se borrara definitivamente'
	 });
	 confirmPopup.then(function(res) {
	   if(res) {
			$http.get("http://localhost/borrarfaltas.php?dni="+dni).success(function(data){
				$http.get("http://localhost/verfaltas.php").success(function(data){
					
				});				
			});
		} else {
			console.log('You are not sure');
		}
	 });
	};
	  */
});
