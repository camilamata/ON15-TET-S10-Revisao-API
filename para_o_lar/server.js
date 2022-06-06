//chamando o app
const app = require('./src/app');

//criando a porta
const PORT = 7050

app.listen(PORT, ()=>{
    console.log(`Aplicação está rodando na porta: ${PORT}`);
})