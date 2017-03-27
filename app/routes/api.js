var Usuario = require('../modelos/usuario');
var jwt = require('jsonwebtoken');
var secreto = 'jamesbond';

module.exports= function(router){
	router.post('/usuarios', function(request, response){
		console.log(request.body.nombre);
		

	});
	
	return router;
}



