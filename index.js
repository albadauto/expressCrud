const express = require('express')
const app = express()
const Cliente = require('./models/Cliente')
const port = '8081'

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res){
   Cliente.findAll().then(function(arr){
        res.render('index', {Dados:arr})
    })
    
})

app.post('/Cadastrar', function(req, res){
    Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf
    }).then(function(){
        res.redirect('/')
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(port, () => {
    console.log("Servidor On!")
})