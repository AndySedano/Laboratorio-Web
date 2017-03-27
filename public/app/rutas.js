angular.module('rutasApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/app/vistas/paginas/inicio.html'
	})
	
	.when('/about', {
		templateUrl: '/app/vistas/paginas/about.html'
	})
	
	.otherwise({ redirecTo: '/'});
	
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});