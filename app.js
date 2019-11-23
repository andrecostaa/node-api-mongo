const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/config')

// 7JZPYUHzyursUJYE
const url = config.bd_string;
const options = {reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Erro de conexão com o banco de dados: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!')
})
mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})

// BODY PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')

app.use('/', indexRoute)
app.use('/users', userRoute)

app.listen(8080, () => {
    console.log("Server no ar!!")
})

module.exports = app;