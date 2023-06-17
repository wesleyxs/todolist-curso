require('dotenv').config();
const express = require('express')
const path = require("path")
const routes = require('./routes/routes')
const connectToDb = require("./database/db")

connectToDb();
const app = express();
const port = process.env.PORT;

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

app.listen(port, ()=>{
    console.log("servidor no ar ");
})

