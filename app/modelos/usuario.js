var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UsuarioSchema = Schema({
    nombre: {type:String, lowercase:true, required:true, unique:true},
 	password: {type:String, required:true},
 	email: {type:String, lowercase:true, required:true, unique:true}
});

//esta función se ejecuta antes de hacer save a la BD
UsuarioSchema.pre('save', function(next) {
	var usuario = this;
  	
  	//encriptación de password
  	bcrypt.hash(usuario.password, null, null, function(error,hash){
  		if(error) return next(error);
  		usuario.password = hash;
  		next();
  	});
});

//Comparación de passwords:
UsuarioSchema.methods.comparaPasswords = function(password){
	return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);