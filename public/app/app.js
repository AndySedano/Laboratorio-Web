//El nombre de los archivos .js
angular.module('LabIoT', ['rutasApp'])
	.config(function($httpProvider){
		
	});


//BASe
angular.module('usuarioApp', 
	['rutasApp','usuarioControlador','accesoControlador','authServicios'])
	.config(function($httpProvider){
		$httpProvider.interceptors.push('AutorizaInterceptors');
	});
