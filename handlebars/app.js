const express = require("express");
const app = express();
const Sequelize = require('sequelize')
const { engine } = require('express-handlebars'); 


// Config
    // Template Engine
    app.engine('handlebars', engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));
    app.set('view engine', 'handlebars')
    // SQL connection
        
        
        
        const sequelize = new Sequelize('chach', 'root', 'redacted', {
        
        
            host: "localhost",
        
        
            dialect: 'mysql'
        
        
        })
    
// rotas
        app.get('/cadastro', function(req, res){
            res.render('forms')
        })
        app.post('/add', function(req, res){
            res.send('recebido')
        })

app.listen(8081, function(){
    console.log("Rodando! http://localhost:8081")
});