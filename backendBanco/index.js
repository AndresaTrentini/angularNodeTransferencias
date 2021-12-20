require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000
const cors = require('cors')
//utilizar arquivos do formato json
app.use(express.json())
app.use(cors())

const rotasContas = require('./rotas')
app.use('/contas',rotasContas)

app.listen(porta,()=>{
    console.log("servidor rodando")
})