var express = require('express');
var app = express();
var port = process.env.PORT||7000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRouters = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname+'/public'))
app.use('/api',appRouters);

mongoose.connect('mongodb://test:test01@ds145359.mlab.com:45369/iot', function(err){
	if(err){
		console.log("Connection error" + err);
	}else{
		console.log("Connected");
	}

});

app.get('*', function(request, response){
	response.sendFile(__dirname+'/public/app/vistas/index.html');
});

app.listen(port, function () {
  console.log('Example app listening on port !' + port)
});