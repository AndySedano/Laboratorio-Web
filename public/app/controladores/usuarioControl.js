angular.module('usuarioControlador', [])
.controller('registroControlador',function($http, $location, $timeout){
	
	var app = this;
	app.mensajeError = false;

	this.registraUsuario = function(datos){
		$http.post('/api/usuarios', this.datos).then(function(data){
			if(data.data.exito){
				app.mensajeExito = data.data.mensaje;

				$timeout(function(){
					$location.path('/');
				}, 3000);
			} else {
				app.mensajeError = data.data.mensaje;
			}
		});
	};
});