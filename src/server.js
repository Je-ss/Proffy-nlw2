// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses , saveClasses} = require('./pages')

// conf nunjucks 
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true, 
})
//inicio e configuração do servidor
server 
// receber os dodados do req.body
.use(express.urlencoded({ extended: true }))

// conf arq estaticos (css, scrits, imagens)
.use(express.static("public"))
// rotas da aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//star do servidor 
.listen(5500)


