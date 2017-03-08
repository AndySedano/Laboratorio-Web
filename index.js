'use strict'
const express  = require('express')
const body = require('body-parser')
const app = express()
const puerto = process.env.PORT || 5000

// BASE de DATOS
const mongoose = require('mongoose')
const Divulgaciones = require('./modelos/divulgacion.js')

app.use(body.urlencoded({ extended: false}))
app.use(body.json())
app.use(express.static('./app'));


mongoose.connect('mongodb://localhost:27017/tienda',(err, res)=>{
	if(err)throw err
	console.log('Conectado!')

	app.listen(puerto, () => {
		console.log('uliServer escuchando')
	})
})




app.listen(puerto, () => {
	console.log('uliServer escuchando')

})
