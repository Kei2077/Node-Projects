
const Sequelize = require('sequelize')


const sequelize = new Sequelize('chach', 'root', 'reacted', {


    host: "localhost",


    dialect: 'mysql'


})
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
/*Postagem.create({
    titulo: "A vila do chach",
    conteudo: "Uma xicará de café?"
}) */
const user = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
//user.sync({force: true})
/* user.create({
    nome: "Victor",
    sobrenome: "Black",
    idade: 35,
    email: "victorino@email.com"
}) */
