//variavel p instanciar o pacote do msql
const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '1234',
    port: 3306,
    database:'banco'
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('estamos conectados com a base de dados')

})

module.exports = conexao

