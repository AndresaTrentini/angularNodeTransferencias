const rotas = require('express').Router()

const conexao = require('./config/conexao')

//rota p listar os dados da database ou seja listar todas as tarefas 

rotas.get('/',(req,res)=>{
    // criando uma query para selecionar todos os dados da tabela tb_tarefas
    let sql = 'select * from tb_contas order by nome_cliente asc'
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows)
    })

})

//rota p mostar apenas uma tarefa de acordo com seu id
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `select * from tb_contas where id_transferencia = ${id}`
    conexao.query(sql,[id], (erro, rows,fields)=>{
        if(erro )throw erro
        res.json(rows[0])
    })
})

//rota para deletar uma tarefa especifica(atraves do seu  id )
rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_contas where id_transferencia = ${id}`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'transferencia excluída com sucesso'})
    })
})

//essa rota é para fazer uma inclusão na tabela de tarefas 
rotas.post('/',(req,res)=>{
    const {nome_cliente,valor,conta_cliente} = req.body
    let sql = `insert into tb_contas(nome_cliente,valor,conta_cliente) values('${nome_cliente}','${valor}', '${conta_cliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        res.json({status:"tarefa incluída com sucesso"})
    })
})
// rota p modificação
rotas.put('/:id', (req,res)=>{
    const {id} = req.params
    const{nome_cliente,valor,conta_cliente} = req.body
    let sql = `update tb_contas set
     nome_cliente = '${nome_cliente}',
     valor = '${valor}',
     conta_cliente = '${conta_cliente}'
     where id_transferencia = '${id}'`
   conexao.query(sql,(erro,rows,fields)=>{
       res.json({status:"transferencia editada com sucesso"})
   })  

})


module.exports = rotas 

