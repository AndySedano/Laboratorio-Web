//El nombre de los archivos .js
angular.module('usuarioApp', 
	['rutasApp','usuarioControlador','accesoControlador','authServicios'])
	.config(function($httpProvider){
		$httpProvider.interceptors.push('AutorizaInterceptors');
	});
