var Usuario = require('../modelos/usuario');
var jwt = require('jsonwebtoken');
var secreto = 'jamesbond';

module.exports= function(router){
	router.post('/usuarios', function(request, response){
		console.log(request.body.nombre);
		
		// dar de alta un usuario
		var usr = new Usuario();
		usr.nombre = request.body.nombre;
		usr.password = request.body.password;
		usr.email = request.body.email;
		usr.save(function(error){
			if(error){
				response.json({
					exito:false,
					mensaje:'Error al guardar en DB'
				});

			} else {
				response.json({
					exito:true,
					mensaje:'Exito!'
				});
			}
		});

	});

	router.post('/valida', function(request, response){
		console.log(request.body.nombre);
		
		//busca a un usuario
		Usuario.findOne({nombre:request.body.nombre})
			.select('email nombre password')
			.exec(function(error,alUsuario){
				if(!alUsuario){
					response.json({
						exito:false,
						mensaje:'Usuario no encontrado'
					});

				} else if(alUsuario){
					// valida que haya password
					if(request.body.password){
						var correcto = alUsuario.comparaPasswords(request.body.password);
						
					} else {
						response.json({
							exito:false,
							mensaje:'No hay password'
						});
					}

					// Si el password fue correcto
					if(correcto){
						var t = jwt.sign({nombre: alUsuario.nombre,
							email: alUsuario.email},
							secreto,
							{'expiresIn':'24h'});
						response.json({
							exito:true,
							mensaje:'Usuario correto',
							token:t
						});

					} else {
						response.json({
							exito:false,
							mensaje:'Password incorrecto'
						});
					}
				}
			});
	});

	//Middleware del token para el manejo de la sesion
	router.use(function(request, response, next){
		var token = request.body.token || request.body.query || request.headers['x-access-token'];
		if(token){
			jwt.verify(token,secreto, function(error, decodificado){
				if(error){
					response.json({exito: false, mensaje:'Token erroneo'});
				}else{
					request.decodificado = decodificado;
					next();
				}

			});
		}else{
			response.json({exito: false, mensaje:'Sin TOKEN'});
		}
	});

	//Decodificadoor
	router.post('/me', function(request, response){
		response.send(request.decodificado);
	});

	return router;
}






