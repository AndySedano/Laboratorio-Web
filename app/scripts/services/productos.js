angular.module('productoService',[])
	.factory('Productos',['$http',function($http) {
		return {
			get : function() {
				return $http.get('/tienda/producto');
			},
			create : function(productoData) {
				return $http.post('/tienda/producto',productoData);
			}
		}
	}]);