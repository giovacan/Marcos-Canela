const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients',{useNewUrlParser:true, useUnifiedTopology: true});

//definir schema de clientes

const clientesSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	username: String,
	age: Number,
	password: String,
	email: String,
});

const clientes = mongoose.model('clientes', clientesSchema);
module.exports = { clientes };