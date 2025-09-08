const Sequelize = require('sequelize')
const sequelize = new Sequelize('chach', 'root', 'REDACTED', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado!")
}).catch(function(erro){
    console.log("falhou: "+erro)
})