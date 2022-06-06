# <div align = "center"> Exercício Semana 10 {reprograma} </div>

# "Mini API" de Livrarias

</div>

<div align = "justify">

Esse projeto foi desenvolvido ao longo da semana 10 do curso de Back-End da reprograma, utilizando a linguagem **JavaScript** e as ferramentas **Node e Postman**.

- Qual a proposta dela?
Para fins didáticos, ela simulou um banco de dados (nesse caso, com um Json) que compila todas as livrarias do país. Cada livraria trás as seguintes informações:

```json

{
        "id": 3,
        "likes": 1,
        "nome": "Trem Literário",
        "endereço": "Rua Logo Ali",
        "numero": 237,
        "bairro": "Vida Toda",
        "cidade": "Belo Horizonte",
        "telefone": "4155-4456",
        "pagamento": ["Dinheiro", "cartao", "pix"],
        "site" : "tremliterario.com.br"
    },

```

Usando essas informações, o propósito foi exercitar as funcionalidades CRUD, levando em consideração algumas funcionalidades que o usuário poderia querer desse banco de dados.

- Quais as funcionalidades?

Mostrando também quais rotas acessam cada funcionalidade, temos:

<div align = "center">

|  Método  |                  Rota                       |                                Resultado                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `GET`   | localhost:7050/bookshops/allBookshops              |                            Lista de todas as livrarias       |
|  `GET`   | localhost:7050/bookshops/filter/:id          |                                      Acessa uma livraria pelo seu ID           |
|  `GET`   | localhost:7050/bookshops/filterByName  |                                       Acessa uma livraria pelo seu nome         |
|  `GET`   | localhost:8099/bookshops/filterByPayment              |                        Acessa uma livraria pela forma de pagamento |
|  `POST`   | localhost:8099/bookshops/register            |                         Cadastra uma nova livraria.|


<br>
</div>

- Para o desenvolvimento dessa simulação de API, optei por criar todos em termos em **inglês** e deixar em português apenas o que **e comunica com o Front-End** e o que já estava no "banco de dados" proposto pela professora durante as aulas.