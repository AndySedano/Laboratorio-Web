angular.module('accesoControlador', ['authServicios'])
.controller('loginController', 
	function(Autoriza, $timeout, $location,$rootScope){
		var app = this;

		$rootScope.$on('$routeChangeStart', function(){
			if(Autoriza.isLogIn()){
				console.log(Autoriza.isLogIn());
				Autoriza.getUsuario().then(function(data){
					console.log(data);
					app.nombre = data.data.nombre;
				});
			}else{
				app.nombre = false;
			}
		});

		this.login = function(datosLogin){
			Autoriza.login(app.datosLogin).then(function(data){
				if(data.data.exito){
					app.mensajeExito = data.data.mensaje;

					$timeout(function(){
						$location.path('/');
						app.datosLogin = '';
						app.mensajeExito = '';
					}, 3000);
				} else {
					app.mensajeError = data.data.mensaje;
				}
			});
		};

		this.logout = function(){
			Autoriza.logout();
			console.log('Loggin out');
			$location.path('/logout');
			$timeout(function(){
				$location.path('/')
				console.log('Loggin ....');
			}, 3000);
		};
});