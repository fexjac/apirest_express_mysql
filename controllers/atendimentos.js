const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando ok GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Servidor ok POST')
    
    })
}