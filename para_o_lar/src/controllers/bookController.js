//Aqui fica a LÓGICA do código (tudo que ele vai fazer)

//Colocando todas as informações da bookModels em uma contante
const res = require("express/lib/response")
const { response } = require("../app")
const bookshopsDB = require("../models/bookshops.json")

//LISTAR TODAS AS LIVRARIAS | GET
const getAll = (req, res) => {
    response.status(200).json({
        "Message": "Aqui estão todas as livrarias cadastradas:",
        bookshopsDB
    })
}


//ACESSAR LIVRARIA POR ID:
const getById = (request, response) => {
    try {
        const idRequest = request.params.id
        const findId = bookshopsDB.find(bookshop => bookshop.id == idRequest)
        if(!findId) throw new Error ("Não existe uma livraria com esse ID")
        response.status(200).json({"Encontramos esta livraria": findId})
    } catch (error) {
        response.status(404).json({
            Message: error.message
        })
    }
}

//ACESSAR LIVRARIA POR NOME
const getByName = (request, response) => {
    try {
        const nameRequest = request.query.name.toLowerCase()
        const findName = bookshopsDB.filter(bookshop => 
            bookshop.nome.toString().toLowerCase().includes(nameRequest))
        if (findName == 0) throw new Error("Não encontramos nenhuma livraria com esse nome")
        response.status(200).json({"Encontramos essa livraria": findName})

    } catch (error){
        response.status(404).json({
            Message: error.message
        })
    }
}

//ACESSAR UMA LIVRARIA POR FORMA DE PAGAMENTO
const paymentOptions = (request, response) => {
    try {
        const paymentRequest = request.query.payment.toLowerCase()
        const findpaymentOption = bookshopsDB.filter(bookshop => 
            bookshop.pagamento.toString().toLowerCase().includes(paymentRequest))
        if (findpaymentOption == 0) throw new Error("Nenhuma livraria aceita essa forma de pagamento.")
        response.status(200).json({"Encontramos essa livraria": findpaymentOption})

    } catch (error){
        response.status(404).json({
            Message: error.message
        })
    }
}

//Acessar uma livraria pelo endereço (não rodou)
/*
const getByAdress = (request, response) => {
    const { adress = null, city = null, district = null } = request.query
    try {
        const findAdress = bookshopsDB.slice()
        if (adress) {
            findAdress = findAdress.filter(bookshop =>
                bookshop.endereço.toString().toLowerCase().includes(adress.toLowerCase()))
        }
        if (city) {
            findCity = findCity.filter(bookshop =>
                bookshop.cidade.toString().toLowerCase().includes(city.toLowerCase()))
        }
        if (district) {
            findDistrict = findDistrict.filter(bookshop =>
                bookshop.bairro.toString().toLowerCase().includes(district.toLowerCase()))

        }
        if (findAdress.length === 0){
            throw new Error ("Nenhuma livraria nesse local.")
        }
        res.status(200).json({"Encontramos essas livrarias": findAdress})
    } catch (error) {
        response.status(400).json({
            Message: error.message
        })

    }
} */
const newBookshop = (request, response) => {
    const { nome, endereço, numero, bairro, cidade, telefone, pagamento, site } = request.body
    try {
        const filterBookshopDB = bookshopsDB
        const id = filterBookshopDB.length + 1
        if(nome === null || nome == "") {
            throw {
                statusCode: 406,
                message: `Você precisa colocar um nome para realizar o cadastro`
                
            }
        }
        const filterByName = bookshopsDB.find(bookshop =>
            bookshop.nome.toLowerCase() == nome)
        if (filterByName && filterByName.telefone == telefone) {
            throw {
                statusCode: 409,
                message: `Livraria já cadastrada`
            }
        }
        const postNewBookshop = {
            id, nome, endereço, numero, bairro, cidade, telefone, pagamento, site
        }
        const keys = Object.keys(postNewBookshop) 
        keys.forEach(key =>{
            const check = true
            if (!postNewBookshop[key]) {
                check = false
                throw {
                    statusCode: 406,
                    message: `Todos os campos devem ser preenchidos.`
                }
            }
        })
        filterBookshopDB.push(newBookshop)
        response.status(201).json({
            "Message": "A Livraria foi cadastrada com sucesso.",
            "Aqui estão suas informações": newBookshop
        })
        
    } catch (error) {
        if (error.statusCode)response.status(error.statusCode).json(error)
        else response.status(500).json(error.message)
    }
}

module.exports = {
    getAll,
    getById,
    getByName,
    paymentOptions,
    newBookshop
    

}