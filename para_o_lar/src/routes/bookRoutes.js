//Chamando o express
const express = require("express")

//Chamando a controller
const controller = require("../controllers/bookController")

const routes = express.Router()

//Criando a rota GERAL (primeiro path) | retorna todas as livrarias
routes.get("/allBookshops", controller.getAll)

//Rota que retorna livrarias por ID
routes.get("/filter/:id", controller.getById)

//Rota que retorna livrarias por nome
routes.get("/filterByName", controller.getByName)

//Rota que retorna livrarias pela forma de pagamento aceita:
routes.get("/filterByPayment", controller.paymentOptions)

//Rota que retorna livrarias por endereço
// (inserindo qualquer informação referente ao endereço)
//routes.get("/filterByAdress", controller.getById)

//Rota que cadastra uma livraria nova
routes.post("/register", controller.newBookshop)


module.exports = routes
