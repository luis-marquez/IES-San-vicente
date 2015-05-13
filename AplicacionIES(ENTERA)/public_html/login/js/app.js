var starter = angular.module('starter.controllers', []);

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
	
    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
    }); 
	
	
    $urlRouterProvider.otherwise('/login');

});