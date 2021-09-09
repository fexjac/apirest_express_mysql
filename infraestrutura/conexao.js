const mysql = require ('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3006,
    user: 'root',
    password: '119954/-Jac',
    database: 'agenda-petshop'
})

module.exports = conexao