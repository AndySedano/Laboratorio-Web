'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const DivulgacionSC = schema({
	titulo: String,
	descripcion: String,
	foto: String,
	tags: String,
	url: String
})

module.exports = mongoose.model('Divulgacion',DivulgacionSC)
