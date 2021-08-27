const Sequelize = require('sequelize')
const connection = new Sequelize('sistemacrud', 'root', '', {
    host:'localhost', 
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    connection: connection,
}