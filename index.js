const express = require('express')
//let ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Connection = require('./database/database')
const Ask = require('./database/AskModel')
const Reply = require('./database/ReplyModel')
const { raw } = require('body-parser')


var limit = 4
var offset = 0

//Utilizando EJS
app.set('view engine', 'ejs')
//Definindo arquivos estáticos
app.use(express.static('public'))
//Usando body-parser
app.use(bodyParser.urlencoded({extended: false}))
//Receber dados de formulários json
app.use(bodyParser.json())


//Routes
app.get('/', (req, res) => {
    var page = req.query.page
    if(page) {
        offset = (page * limit) - 4
    }

    Ask.count().then(qtd => {
        
        Ask.findAll({
        raw: true, 
        order: [['id', 'DESC']],
        limit: limit,
        offset: offset
        }).then(asks => {
            var pages = Math.ceil(qtd / limit)
            res.render("home", {asks: asks, pages: pages})
            //res.send({asks: asks, pages: pages})
        })

    })
    
})

app.get('/toask', (req, res) => {
    res.render('toask')
})

app.post('/receiveask', (req, res) => {
    var subject = req.body.subject
    var question = req.body.question
     
    if(subject != "" && question != "") {
        insert = Ask.create({
            title: subject,
            description: question
        }).then(() => {
            res.redirect('/')
        })
    } else {
        res.redirect('back')
    }
})

app.get('/selquestion/:id', (req, res) => {
    var page = req.query.page
    var query = req.params.id
    Ask.findOne({
        where: {id: query}
    }).then(ask => {
        if(ask != undefined) {
            /*
            Reply.findAll({raw: true, order: [
                ['id', 'DESC']
            ]}).then(replies => {
                res.render("selectask", {
                    ask: ask,
                    replies: replies
                })
            })
            */

            if(page) {
                offset = (page * limit) - 4
            }

            Reply.count().then(qtd => {
                
                Reply.findAll({
                raw: true, 
                order: [['id', 'DESC']],
                limit: limit,
                offset: offset
                }).then(replies => {
                    var pages = Math.ceil(qtd / limit)
                    res.render("selectask", {
                        ask: ask,
                        replies: replies,
                        pages: pages})
                })

            })

        } else {
            res.redirect("/")
        }
    })
})

app.post('/reply', (req, res) => {
    var ask_id = req.body.ask_id
    var reply = req.body.reply
    
    if(ask_id != "" && reply != "") {
        insert = Reply.create({
            reply: reply,
            ask_id: ask_id
        }).then(() => {
            res.redirect('back')
        })
    } else {
        res.redirect('back')
    }
})

app.get('/replies', (req, res) => {
    Reply.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then(replies => {
        res.send(replies)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




/*
app.get('/:name?/:lang?', (req, res) => {
    //var name = "Wanderson Duarte Alves"
    //var lang = "Java Script"
    var products = [
        {prod : "Pizza", value: 25},
        {prod : "Cake", value: 120}
    ]
    res.render("index", {
        name: req.params.name,
        lang: req.params.lang,
        products: products, 
        other: "Linux"
    })
})*/


