angular.module('divulgacionService',[])
	.factory('Divulgaciones',['$http',function($http) {
		return {
			get : function() {
				return $http.get('');
			},
			create : function(productoData) {
				return $http.post('',productoData);
			}
		}
	}]);