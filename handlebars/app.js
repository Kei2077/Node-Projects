const express = require("express");
const app = express();
const handlebars = require('express-handlebars')


// config
    // Template Engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    // SQL connection
        const Sequelize = require('sequelize')
        
        
        const sequelize = new Sequelize('chach', 'root', 'REDACTED', {
        
        
            host: "localhost",
        
        
            dialect: 'mysql'
        
        
        })
    

app.listen(8081, function(){
    console.log("Rodando! http://localhost:8081")
});