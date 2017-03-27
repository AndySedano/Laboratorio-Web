angular.module('authServicios', [])
.factory('Autoriza', function($http, AutorizaToken){
	var authFactory ={};

	authFactory.login = function(datosLogin){
		return $http.post('/api/valida', datosLogin).then(function(data){
			AutorizaToken.setToken(data.data.token);
			return data;
		});
	}

	authFactory.isLogIn = function(){
		if(AutorizaToken.getToken()){
			return true;
		}else{
			return false;
		}
	};

	authFactory.getUsuario = function(){
		if(AutorizaToken.getToken()){
			return $http.post('/api/me');
		}else{
			$q.reject({mensaje:'sin token'});
		}
	};

	authFactory.logout = function(){
		AutorizaToken.setToken();
	};
	return authFactory;

})

.factory('AutorizaToken', function($window){
	var authTokenFactory = {};

	authTokenFactory.setToken = function(token){
		if(token){
			$window.localStorage.setItem('token', token);
		}else{
			$window.localStorage.removeItem('token');
		}

	};

	authTokenFactory.getToken = function(){
		return $window.localStorage.getItem('token');
	};

	return authTokenFactory;

})

.factory('AutorizaInterceptors', function(AutorizaToken){
	var autorizaInterceptors = {};
	autorizaInterceptors.request = function(config){
		var token = AutorizaToken.getToken();
		if(token){
			config.headers['x-access-token'] = token;
		}

		return config;
	}

	return autorizaInterceptors;

});