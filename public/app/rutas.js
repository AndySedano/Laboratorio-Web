angular.module('rutasApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/app/vistas/paginas/inicio.html'
	})
	
	.when('/about', {
		templateUrl: '/app/vistas/paginas/about.html'
	})
	
	.when('/registro', {
		templateUrl: '/app/vistas/paginas/registro.html',
		controller: 'registroControlador',
		controllerAs: 'registro'

	})

	.when('/login', {
		templateUrl: '/app/vistas/paginas/login.html',
		controller: 'loginController',
		controllerAs: 'login'
	})

	.when('/logout', {
		templateUrl: '/app/vistas/paginas/logout.html',
	})
	
	.otherwise({ redirecTo: '/'});
	
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});