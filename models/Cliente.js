const { Sequelize } = require('./db')
const db = require('./db')
const Cliente = db.connection.define('cliente', {
    nome:{
        type: Sequelize.STRING
    },
    cpf:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
}) 


// Cliente.sync().then(function(){
//     console.log('Inserido')
// })

module.exports = Cliente