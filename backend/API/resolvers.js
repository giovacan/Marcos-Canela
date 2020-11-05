
const { clientes } = require ('./db');
const { rejects } = require('assert');


module.exports.resolvers = {
    Query: {
        getCliente : ({id}) => {
            return new Cliente(id, clientesDB[id]);
        },
    },
    Mutation: {
        crearCliente : (root,{input}) =>{
            const nuevocliente =  new Clientes({
                name : input.name,
                lastname : input.lastname,
                age : input.age,
                username : input.username,
                password : input.password,
                email : input.email
            })
            nuevocliente.id = nuevocliente._id;

            return new Promise((resolve, object) => {
                nuevoCliente.save((error) => {
                    if(error) reject(error)
                    else resolve(nuevocliente)
                })
            });

        },
        actualizarCliente: (root, {input}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate( { _id : input.id }, input, { new: true }, (error, cliente) => {
                if (error) rejects(error)
                else resolve(cliente)
                });
            });
        },
        eliminarCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                Cliente.findOneAndRemove({ _id: id }, (error) => {
                    if(error) rejects(error)
                    else resolve("Se Elimino Correctamente")
                })
            });
        }
    }
    
}

