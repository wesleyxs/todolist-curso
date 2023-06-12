const express = require('express')
const app = express()
//configuração do path responsavel por lincar meu css pt1
const path = require("path")
const routes = require('./routes/routes')
const mongoose = require ('mongoose')



//configuração da extenção ejs
// ir para o site npm ejs e instalar via cmd
app.set("view engine", "ejs")
//configuração do path responsavel por lincar meu css pt2
app.use(express.static(path.join(__dirname, "public")))
//responsavel para salvar as alterações no DB
app.use(express.urlencoded());
//xxxxxx
app.use(routes)


//configuração da porta do s ervidor 
const PORT = 8081
app.listen(PORT, ()=>{
    console.log("servidor no ar");
})

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todolist").then(() =>{
    console.log("conectado ao mongo")
}).catch((err) =>{
console.log("erro" +err)
})
