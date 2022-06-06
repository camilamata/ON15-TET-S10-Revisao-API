//Importando o express
const express = require("express")

//Importando o cors
const cors = require("cors")

//Criando uma constante para o app, que vai chamar a express
const app = express()

//Configurando o cors
app.use(cors())

//Configurando o body parser, pelo método use | preciso chamar Json como função
app.use(express.json())

//Importando as rotas, fazendo um requerimento do routes
const bookRoute = require("./routes/bookRoutes")

//Usando o método use para ACESSAR a rota
app.use("/bookshops", bookRoute)

module.exports = app;   