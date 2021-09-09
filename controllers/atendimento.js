module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando ok GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Servidor ok POST')
    
    })
}