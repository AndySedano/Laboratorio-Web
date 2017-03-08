angular.module('webIoT', [])
	.controller('divulgaController', ['$scope','$http','Divulgaciones', 
		function($scope, $http, Divulgaciones) {
		
		$scope.formData = {};
		$scope.loading = true;

		Productos.get()
			.success(function(data) {
				$scope.productos = data.productos;
				$scope.loading = false;
			});

		$scope.createProducto = function() {
			if($scope.formData.nombre != undefined) {
				$scope.loading = true;
				Productos.create($scope.formData)
					.success(function(data){
						$scope.loading = false;
						$scope.formData = {};
						$scope.productos = data;

					});
			}
		};
}]);
