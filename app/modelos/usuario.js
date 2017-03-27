var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var DivulgacionSchema = Schema({
  titulo: {type:String, lowercase:true, required:true, unique:true},
  descripcion: {type:String, lowercase:true, required:true, unique:true},
  //imagen: {data: data, contentType: type},
  tags: {type:String, lowercase:true, required:true, unique:false},
  url: {type:String, lowercase:true, required:false, unique:true}
});


//Exportar los Esquemas de BD
module.exports = mongoose.model('Divulgacion', DivulgacionSchema);
